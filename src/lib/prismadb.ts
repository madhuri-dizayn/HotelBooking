import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = () => {
  if (global.prisma) return global.prisma;

  global.prisma = new PrismaClient();
  return global.prisma;
};
