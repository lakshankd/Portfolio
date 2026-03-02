import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Alert className="max-w-md">
        <AlertCircleIcon />
        <AlertTitle>Page Not Found</AlertTitle>
        <AlertDescription>
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.{" "}
          <Link href="/" className="inline-block hover:underline">
            Go back home
          </Link>
        </AlertDescription>
      </Alert>
    </div>
  );
}
