"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
  password: z.string().min(1, { message: "비밀번호를 입력해주세요." }),
});

export default function LoginPage() {
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [router]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const usersStr = localStorage.getItem("demo_users");
    const users = usersStr ? JSON.parse(usersStr) : [];
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = users.find((u: any) => u.email === values.email && u.password === values.password);

    if (user) {
      localStorage.setItem("currentUser", user.email);
      toast.success("로그인 성공!", {
        description: `${user.email}님 환영합니다.`,
      });
      router.push("/dashboard");
    } else {
      toast.error("로그인 실패", {
        description: "이메일 또는 비밀번호가 올바르지 않습니다.",
      });
      form.setError("email", { type: "manual", message: "이메일 또는 비밀번호가 올바르지 않습니다." });
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <Card className="w-full max-w-md shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">로그인</CardTitle>
          <CardDescription>
            계정에 접근하려면 이메일과 비밀번호를 입력해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">이메일 주소</Label>
              <Input id="email" placeholder="user@example.com" type="email" {...form.register("email")} />
              {form.formState.errors.email && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">비밀번호</Label>
              </div>
              <Input id="password" placeholder="••••••••" type="password" {...form.register("password")} />
              {form.formState.errors.password && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              로그인
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t p-4 text-sm text-zinc-500 dark:text-zinc-400">
          계정이 없으신가요?{" "}
          <Link href="/signup" className="ml-1 font-medium text-zinc-900 dark:text-zinc-50 hover:underline">
            회원가입하기
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
