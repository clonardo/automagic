import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvestorOrderRequestService } from "./investorOrderRequest.service";
import { InvestorOrderRequestControllerBase } from "./base/investorOrderRequest.controller.base";

@swagger.ApiTags("investorOrderRequests")
@common.Controller("investorOrderRequests")
export class InvestorOrderRequestController extends InvestorOrderRequestControllerBase {
  constructor(
    protected readonly service: InvestorOrderRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
