import { Module } from "@nestjs/common";
import { InvestorOrderRequestModuleBase } from "./base/investorOrderRequest.module.base";
import { InvestorOrderRequestService } from "./investorOrderRequest.service";
import { InvestorOrderRequestController } from "./investorOrderRequest.controller";
import { InvestorOrderRequestResolver } from "./investorOrderRequest.resolver";

@Module({
  imports: [InvestorOrderRequestModuleBase],
  controllers: [InvestorOrderRequestController],
  providers: [InvestorOrderRequestService, InvestorOrderRequestResolver],
  exports: [InvestorOrderRequestService],
})
export class InvestorOrderRequestModule {}
