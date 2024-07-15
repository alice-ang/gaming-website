"use client";
import React, { FC, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "./ui/use-toast";

type Inputs = {
  email: string;
};

export const NewsletterForm: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { toast } = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data?.email,
        }),
      });

      const datas = await response.json();

      if (datas.status !== "subscribed") {
        setError("email", {
          type: "manual",
          message: datas.detail,
        });
        toast({
          variant: "destructive",
          title: "Something went wrong 😬",
          description: datas.detail,
        });
      } else {
        toast({
          title: "Dancing! ⛳️",
          description: "You are now subscibed to our newsletter",
        });
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="">
        <div className="w-full relative flex flex-nowrap ">
          <input
            {...register("email", {
              required: "An email is required",
            })}
            className="bg-neutral-200 py-3 px-4 flex-1 text-palette-footer"
            placeholder="eg.yourname@example.com"
          />
          <div className="absolute right-0 ">
            <button
              type="submit"
              className="bg-palette-yellow py-3 px-6 text-palette-footer rounded-r-sm"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
