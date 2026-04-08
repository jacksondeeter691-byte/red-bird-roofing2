import { describe, expect, it, vi, beforeEach } from "vitest";
import { z } from "zod";

// Test the booking validation schema directly
const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(5, "Address is required"),
  serviceType: z.string().min(1, "Service type is required"),
  description: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

type BookingData = z.infer<typeof bookingSchema>;

describe("bookings validation", () => {
  it("accepts valid booking data", () => {
    const bookingData = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "(317) 555-0000",
      address: "123 Main St, Carmel, IN 46032",
      serviceType: "roof-inspection",
      description: "Need inspection for new home",
      preferredDate: "2026-04-15",
      preferredTime: "morning",
    };

    const result = bookingSchema.safeParse(bookingData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.firstName).toBe("John");
      expect(result.data.email).toBe("john@example.com");
    }
  });

  it("rejects booking with missing first name", () => {
    const invalidData = {
      firstName: "",
      lastName: "Doe",
      email: "john@example.com",
      phone: "(317) 555-0000",
      address: "123 Main St",
      serviceType: "roof-inspection",
    };

    const result = bookingSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("First name");
    }
  });

  it("rejects booking with invalid email", () => {
    const invalidData = {
      firstName: "John",
      lastName: "Doe",
      email: "invalid-email",
      phone: "(317) 555-0000",
      address: "123 Main St, Carmel, IN 46032",
      serviceType: "roof-inspection",
    };

    const result = bookingSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("email");
    }
  });

  it("rejects booking with short phone number", () => {
    const invalidData = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "123",
      address: "123 Main St, Carmel, IN 46032",
      serviceType: "roof-inspection",
    };

    const result = bookingSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("phone");
    }
  });

  it("rejects booking with short address", () => {
    const invalidData = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "(317) 555-0000",
      address: "123",
      serviceType: "roof-inspection",
    };

    const result = bookingSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("Address");
    }
  });

  it("accepts optional fields", () => {
    const minimalData = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "(317) 555-0000",
      address: "123 Main St, Carmel, IN 46032",
      serviceType: "roof-inspection",
    };

    const result = bookingSchema.safeParse(minimalData);
    expect(result.success).toBe(true);
  });

  it("validates all required service types", () => {
    const serviceTypes = [
      "roof-inspection",
      "roof-repair",
      "roof-replacement",
      "gutter-cleaning",
      "gutter-repair",
      "gutter-installation",
      "skylight-installation",
      "skylight-repair",
      "other",
    ];

    const baseData = {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "(317) 555-0000",
      address: "123 Main St, Carmel, IN 46032",
    };

    serviceTypes.forEach((serviceType) => {
      const data = { ...baseData, serviceType };
      const result = bookingSchema.safeParse(data);
      expect(result.success).toBe(true);
    });
  });
});
