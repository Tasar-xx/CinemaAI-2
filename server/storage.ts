import { 
  users, type User, type InsertUser,
  aiTools, type AiTool, type InsertAiTool,
  projects, type Project, type InsertProject,
  feedback, type Feedback, type InsertFeedback
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // AI Tools methods
  getAiTool(id: number): Promise<AiTool | undefined>;
  getAllAiTools(): Promise<AiTool[]>;
  createAiTool(tool: InsertAiTool): Promise<AiTool>;
  
  // Project methods
  getProject(id: number): Promise<Project | undefined>;
  getUserProjects(userId: number): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Feedback methods
  getFeedback(id: number): Promise<Feedback | undefined>;
  getToolFeedback(toolId: number): Promise<Feedback[]>;
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // AI Tools methods
  async getAiTool(id: number): Promise<AiTool | undefined> {
    const [tool] = await db.select().from(aiTools).where(eq(aiTools.id, id));
    return tool || undefined;
  }
  
  async getAllAiTools(): Promise<AiTool[]> {
    return await db.select().from(aiTools);
  }
  
  async createAiTool(tool: InsertAiTool): Promise<AiTool> {
    const [newTool] = await db.insert(aiTools).values(tool).returning();
    return newTool;
  }
  
  // Project methods
  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || undefined;
  }
  
  async getUserProjects(userId: number): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.userId, userId));
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }
  
  // Feedback methods
  async getFeedback(id: number): Promise<Feedback | undefined> {
    const [feedbackItem] = await db.select().from(feedback).where(eq(feedback.id, id));
    return feedbackItem || undefined;
  }
  
  async getToolFeedback(toolId: number): Promise<Feedback[]> {
    return await db.select().from(feedback).where(eq(feedback.toolId, toolId));
  }
  
  async createFeedback(feedbackItem: InsertFeedback): Promise<Feedback> {
    const [newFeedback] = await db.insert(feedback).values(feedbackItem).returning();
    return newFeedback;
  }
}

export const storage = new DatabaseStorage();
