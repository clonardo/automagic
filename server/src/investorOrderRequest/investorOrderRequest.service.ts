import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InvestorOrderRequestServiceBase } from "./base/investorOrderRequest.service.base";

@Injectable()
export class InvestorOrderRequestService extends InvestorOrderRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
