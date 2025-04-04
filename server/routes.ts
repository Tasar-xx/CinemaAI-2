import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertUserSchema,
  insertAiToolSchema,
  insertProjectSchema,
  insertFeedbackSchema
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Middleware to validate request body against a Zod schema
  const validateBody = (schema: z.ZodType) => async (req: Request, res: Response, next: Function) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: 'Validation error', 
          errors: error.format() 
        });
      }
      return res.status(500).json({ message: 'Internal server error during validation' });
    }
  };

  // Basic API endpoint to track access requests
  app.post('/api/request-access', async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // Store in database later
      console.log(`Access request from: ${email}`);
      
      res.status(200).json({ message: 'Access request submitted successfully' });
    } catch (error) {
      console.error('Error processing access request:', error);
      res.status(500).json({ message: 'Error processing your request' });
    }
  });

  // User Routes
  app.get('/api/users/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Don't send the password back to the client
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Error fetching user' });
    }
  });

  app.post('/api/users', validateBody(insertUserSchema), async (req, res) => {
    try {
      const user = await storage.createUser(req.body);
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user' });
    }
  });

  // AI Tools Routes
  app.get('/api/tools', async (req, res) => {
    try {
      const tools = await storage.getAllAiTools();
      res.json(tools);
    } catch (error) {
      console.error('Error fetching AI tools:', error);
      res.status(500).json({ message: 'Error fetching AI tools' });
    }
  });

  app.get('/api/tools/:id', async (req, res) => {
    try {
      const toolId = parseInt(req.params.id);
      if (isNaN(toolId)) {
        return res.status(400).json({ message: 'Invalid tool ID' });
      }

      const tool = await storage.getAiTool(toolId);
      if (!tool) {
        return res.status(404).json({ message: 'AI tool not found' });
      }

      res.json(tool);
    } catch (error) {
      console.error('Error fetching AI tool:', error);
      res.status(500).json({ message: 'Error fetching AI tool' });
    }
  });

  app.post('/api/tools', validateBody(insertAiToolSchema), async (req, res) => {
    try {
      const tool = await storage.createAiTool(req.body);
      res.status(201).json(tool);
    } catch (error) {
      console.error('Error creating AI tool:', error);
      res.status(500).json({ message: 'Error creating AI tool' });
    }
  });

  // Project Routes
  app.get('/api/projects/:id', async (req, res) => {
    try {
      const projectId = parseInt(req.params.id);
      if (isNaN(projectId)) {
        return res.status(400).json({ message: 'Invalid project ID' });
      }

      const project = await storage.getProject(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }

      res.json(project);
    } catch (error) {
      console.error('Error fetching project:', error);
      res.status(500).json({ message: 'Error fetching project' });
    }
  });

  app.get('/api/users/:userId/projects', async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      const projects = await storage.getUserProjects(userId);
      res.json(projects);
    } catch (error) {
      console.error('Error fetching user projects:', error);
      res.status(500).json({ message: 'Error fetching user projects' });
    }
  });

  app.post('/api/projects', validateBody(insertProjectSchema), async (req, res) => {
    try {
      const project = await storage.createProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ message: 'Error creating project' });
    }
  });

  // Feedback Routes
  app.get('/api/feedback/:id', async (req, res) => {
    try {
      const feedbackId = parseInt(req.params.id);
      if (isNaN(feedbackId)) {
        return res.status(400).json({ message: 'Invalid feedback ID' });
      }

      const feedbackItem = await storage.getFeedback(feedbackId);
      if (!feedbackItem) {
        return res.status(404).json({ message: 'Feedback not found' });
      }

      res.json(feedbackItem);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      res.status(500).json({ message: 'Error fetching feedback' });
    }
  });

  app.get('/api/tools/:toolId/feedback', async (req, res) => {
    try {
      const toolId = parseInt(req.params.toolId);
      if (isNaN(toolId)) {
        return res.status(400).json({ message: 'Invalid tool ID' });
      }

      const feedbackItems = await storage.getToolFeedback(toolId);
      res.json(feedbackItems);
    } catch (error) {
      console.error('Error fetching tool feedback:', error);
      res.status(500).json({ message: 'Error fetching tool feedback' });
    }
  });

  app.post('/api/feedback', validateBody(insertFeedbackSchema), async (req, res) => {
    try {
      const feedbackItem = await storage.createFeedback(req.body);
      res.status(201).json(feedbackItem);
    } catch (error) {
      console.error('Error creating feedback:', error);
      res.status(500).json({ message: 'Error creating feedback' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
