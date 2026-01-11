import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const TasksErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <Alert variant="destructive">
      <AlertTitle>문제가 발생했습니다</AlertTitle>
      <AlertDescription className="mt-2">
        할 일 목록을 불러오지 못했습니다.
      </AlertDescription>

      <Button
        variant="outline"
        size="sm"
        className="mt-4"
        onClick={resetErrorBoundary}
      >
        다시 시도
      </Button>
    </Alert>
  );
};
