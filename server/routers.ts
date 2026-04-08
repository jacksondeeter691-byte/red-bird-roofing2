import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getBookings } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  bookings: router({
    create: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1, "First name is required"),
          lastName: z.string().min(1, "Last name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().min(10, "Valid phone number is required"),
          address: z.string().min(5, "Address is required"),
          serviceType: z.string().min(1, "Service type is required"),
          description: z.string().optional(),
          preferredDate: z.string().optional(),
          preferredTime: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createBooking({
          ...input,
          status: "pending",
        });
        return {
          success: true,
          message: "Booking submitted successfully. We'll contact you soon!",
        };
      }),

    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await getBookings();
    }),
  }),
});

export type AppRouter = typeof appRouter;
