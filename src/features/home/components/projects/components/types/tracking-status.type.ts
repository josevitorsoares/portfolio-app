import {
  BadgeDollarSignIcon,
  BanIcon,
  BarcodeIcon,
  CircleDollarSignIcon,
  CircleHelpIcon,
  ClockAlertIcon,
  DoorClosedIcon,
  FileCheckIcon,
  LandmarkIcon,
  MapPinOffIcon,
  MilestoneIcon,
  OctagonAlertIcon,
  PackageCheckIcon,
  PackageIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  ShieldCheckIcon,
  StoreIcon,
  TruckIcon,
  Undo2Icon,
  WarehouseIcon,
  type LucideIcon,
} from "lucide-react";

export type TrackingStatus =
  // Importação
  | "electronic_info_sent"
  | "posted"
  | "left_international_center"
  | "received_in_brazil"
  | "sent_to_customs"
  | "customs_cleared"
  | "awaiting_payment"
  | "payment_confirmed"
  | "customs_finished"

  // Trânsito Nacional
  | "in_transit"
  | "at_distribution_center"
  | "delivery_route"
  | "delivered"

  // Exceções
  | "not_arrived_at_unit"
  | "awaiting_pickup"
  | "delivery_failed_absent"
  | "incorrect_address"
  | "import_rejected"
  | "returned_to_origin"
  | "lost_or_stolen"

  // Desconhecido
  | "unknown";

export const statusIconMap: Record<TrackingStatus, LucideIcon> = {
  electronic_info_sent: BarcodeIcon,
  posted: PackageIcon,
  left_international_center: PlaneTakeoffIcon,
  received_in_brazil: PlaneLandingIcon,
  sent_to_customs: LandmarkIcon,
  customs_cleared: FileCheckIcon,
  awaiting_payment: CircleDollarSignIcon,
  payment_confirmed: BadgeDollarSignIcon,
  customs_finished: ShieldCheckIcon,

  in_transit: MilestoneIcon,
  at_distribution_center: WarehouseIcon,
  delivery_route: TruckIcon,
  delivered: PackageCheckIcon,

  not_arrived_at_unit: ClockAlertIcon,
  awaiting_pickup: StoreIcon,
  delivery_failed_absent: DoorClosedIcon,
  incorrect_address: MapPinOffIcon,
  import_rejected: BanIcon,
  returned_to_origin: Undo2Icon,
  lost_or_stolen: OctagonAlertIcon,

  unknown: CircleHelpIcon,
};
