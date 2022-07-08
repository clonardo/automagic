import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InvestorOrderRequestResolverBase } from "./base/investorOrderRequest.resolver.base";
import { InvestorOrderRequest } from "./base/InvestorOrderRequest";
import { InvestorOrderRequestService } from "./investorOrderRequest.service";

@graphql.Resolver(() => InvestorOrderRequest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InvestorOrderRequestResolver extends InvestorOrderRequestResolverBase {
  constructor(
    protected readonly service: InvestorOrderRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
