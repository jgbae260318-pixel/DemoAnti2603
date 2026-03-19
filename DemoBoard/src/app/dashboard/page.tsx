"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check authentication state
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      toast.error("접근 권한이 없습니다.", { description: "먼저 로그인해주세요." });
      router.push("/login");
    } else {
      setUserEmail(currentUser);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    toast.success("로그아웃 되었습니다.");
    router.push("/login");
  };

  if (!mounted || !userEmail) return null; // Avoid rendering until auth is checked

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <Card className="w-full max-w-md shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">대시보드</CardTitle>
          <CardDescription>
            성공적으로 로그인하셨습니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 flex flex-col items-center mt-2">
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900 rounded-xl w-full text-center border border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">현재 접속 중인 계정</p>
            <p className="font-semibold text-lg">{userEmail}</p>
          </div>
          <Button onClick={handleLogout} variant="destructive" className="w-full">
            로그아웃
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
