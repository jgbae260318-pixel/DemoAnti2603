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
  password: z.string().min(8, { message: "비밀번호는 최소 8자리 이상이어야 합니다." }),
  confirmPassword: z.string().min(1, { message: "비밀번호 확인을 입력해주세요." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다.",
  path: ["confirmPassword"],
});

export default function SignUpPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
    if (users.find((u: any) => u.email === values.email)) {
      form.setError("email", { type: "manual", message: "이미 가입된 이메일입니다." });
      return;
    }

    users.push({ email: values.email, password: values.password });
    localStorage.setItem("demo_users", JSON.stringify(users));

    toast.success("회원가입 성공!", {
      description: "로그인 페이지로 이동합니다.",
    });
    router.push("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <Card className="w-full max-w-md shadow-lg border-zinc-200 dark:border-zinc-800">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">회원가입</CardTitle>
          <CardDescription>
            새로운 계정을 생성하려면 아래 정보를 입력해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" placeholder="최소 8자리 이상" type="password" {...form.register("password")} />
              {form.formState.errors.password && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <Input id="confirmPassword" placeholder="비밀번호 다시 입력" type="password" {...form.register("confirmPassword")} />
              {form.formState.errors.confirmPassword && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full mt-2">
              회원가입
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t p-4 text-sm text-zinc-500 dark:text-zinc-400">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="ml-1 font-medium text-zinc-900 dark:text-zinc-50 hover:underline">
            로그인하기
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
