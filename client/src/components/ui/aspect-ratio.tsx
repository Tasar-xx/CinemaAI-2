import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  ratio?: number;
}

const AspectRatio = ({ ratio = 16 / 9, className, ...props }: AspectRatioProps) => (
  <AspectRatioPrimitive.Root ratio={ratio} {...props} />
);

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
