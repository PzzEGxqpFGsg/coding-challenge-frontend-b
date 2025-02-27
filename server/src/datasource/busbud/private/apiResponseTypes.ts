// Generated by https://quicktype.io

export interface DeparturesResponse {
  origin_city_id: string;
  destination_city_id: string;
  cities: City[];
  locations: Location[];
  operators: Operator[];
  departures: XDeparture[];
  complete: boolean;
  ttl: number;
  is_valid_route: boolean;
  metadata: Metadata;
}

export interface City {
  id: string;
  region_id: number;
  name: string;
  lat: number;
  lon: number;
  geohash: string;
  timezone: string;
  image_url: null | string;
  hero_image_url: string;
  legacy_url_form: string;
  country_code2: string;
  full_name: string;
  short_name: string;
  locale: string;
  region: Region;
}

export interface Region {
  id: number;
  region_code: string;
  country_code2: string;
  name: string;
  short_name: string;
  locale: string;
  country: Country;
}

export interface Country {
  code2: string;
  code3: string;
  name: string;
  short_name: string;
  continent: string;
  default_locale: string;
  default_currency: Currency;
  population: number;
  locale: string;
}

export type Currency = "CAD" | "USD" | "EUR";

export interface XDeparture {
  amenities: EconomyClass;
  arrival_timezone: string;
  available_seats: number;
  vehicle: null;
  busbud_departure_id: string;
  class: Class;
  class_name: ClassName;
  complete: boolean;
  contractor_name: null;
  fare_name: null;
  deeplink: null;
  departure_timezone: string;
  departure_type: DepartureType;
  destination_location_id: number;
  duration: number;
  has_search_details: boolean;
  has_layout: null;
  has_transfers: boolean;
  has_addons: null;
  id: string;
  links: DepartureLinks;
  num_transfers: number;
  operator_id: string;
  origin_location_id: number;
  passenger_questions: any[];
  schedule_id: null;
  sellable: boolean;
  source_id: number;
  ticket_types: TicketType[];
  departure_time: string;
  arrival_time: string;
  fetched_at: string;
  search_request_id: string;
  unreliable_duration: null;
  has_unmapped_location: null;
  data_source: DataSource;
  cache_source: CacheSource;
  operator_disclaimers: null;
  vehicle_type: VehicleType;
  origin_mapped_by: EdBy;
  destination_mapped_by: EdBy;
  bus: null;
  has_bus_details: null;
  prices: Prices;
  trip_stops: TripStop[];
  addons: any[];
  details: Details;
  terms: Terms;
}

export interface EconomyClass {
  display_name: string;
  wifi: boolean;
  toilet: boolean;
  ac: boolean;
  refreshment: boolean;
  food: boolean;
  hot_meal: boolean;
  power_outlets: boolean;
  tv: boolean;
  bus_attendant: boolean;
  leg_room: boolean;
  small_seat: boolean;
  average_seat: boolean;
  xl_seat: boolean;
  full_recline_seat: boolean;
  carpool: boolean;
}

export type CacheSource = "departure-service";

export type Class = "FLEX";

export type ClassName = "Flex";

export type DataSource = "l2";

export type DepartureType = "editable-refundable";

export type EdBy = "manual";

export interface Details {}

export interface DepartureLinks {
  deeplink: string;
}

export interface Prices {
  currency: Currency;
  total: number;
  categories: Categories;
  discount: number;
  roundtrip_min: null;
  roundtrip_min_fees_included: null;
  roundtrip_total: null;
  roundtrip_total_fees_included: null;
  discounted: null;
  breakdown: Breakdown;
}

export interface Breakdown {
  base: number;
  fees: number;
  taxes: number;
  discount: number;
}

export interface Categories {
  adult: number;
}

export interface Terms {
  type_of_id: TypeOfID;
  ticket_requirements: TicketRequirements;
  nb_carry_on: number;
  kg_by_carry_on: null;
  nb_checked_bags: number;
  kg_by_bag: number;
  checked_in_size_cm: CheckedInSizeCM;
  extra_checked_in_fees: ExtraCheckedInFeesClass;
  nb_extra_checked_in: null;
  total_checked_in_kg: null;
  oversized_luggage: OversizedLuggage;
  animals: Animals;
  refund_policies: Policy[];
  refund: boolean;
  refund_cutoff: number;
  exchange_policies: Policy[];
  exchange_disclaimers: any[];
  exchange: boolean;
  exchange_cutoff: number;
  exchange_cutoff_at: string;
  refund_cutoff_at: string;
  currency: Currency;
  addons: Details;
  custom_disclaimers: null;
  piece_of_id: boolean;
  boarding_requirement: BoardingRequirement;
  extra_bag_policy: boolean;
  extra_bag_cost: number;
  extra_bag_kg_cost: null;
  bag_allowed: boolean;
}

export interface Animals {
  fees: AnimalsFees;
  main_compartment_allowed: boolean;
  hold_compartment_allowed: boolean;
  main_max_weight_kg: null;
  main_small_cage_required: null;
  hold_max_weight_kg: null;
  vaccination_required: boolean;
  special_animals_allowed: boolean;
  early_arrival_required: boolean;
  specific_hours: null;
}

export interface AnimalsFees {
  type: string;
  amount: null;
  percent: null;
}

export type BoardingRequirement = "printed_or_mobile_tkt";

export interface CheckedInSizeCM {
  l: number;
  w: number;
  h: number;
}

export interface Policy {
  type: ExchangePolicyType;
  flat_fee: null;
  flat_fee_currency: Currency;
  percent_fee: number | null;
  cutoff_reference: CutoffReference;
  cutoff_from: null;
  cutoff_to: number;
  external_link: null;
}

export type CutoffReference = "departure-date";

export type ExchangePolicyType = "self-serve" | "station";

export interface ExtraCheckedInFeesClass {
  type: ExtraCheckedInFeesType;
  amount: number;
}

export type ExtraCheckedInFeesType = "flat_fee" | "per_extra_checked_in";

export interface OversizedLuggage {
  allowed: boolean;
  allowed_types: any[];
  fees: ExtraCheckedInFeesClass;
  early_arrival_required: boolean;
  cover_required: boolean;
}

export interface TicketRequirements {
  eticket: BoardingRequirement;
}

export type TypeOfID = "photo_and_full_name";

export type TicketType = "eticket";

export interface TripStop {
  arrival_time: null | string;
  departure_time: null | string;
  duration: number;
  departure_operator_id: null;
  location_id: number;
  geohash: string;
  name: string;
  transfer: boolean;
  service_name: null;
  service_number: null;
}

export type VehicleType = "bus";

export interface Location {
  id: number;
  city_id: string;
  name: string;
  address: string[];
  type: string;
  lat: number | null;
  lon: number | null;
  geohash: null | string;
  created_by: EdBy;
}

export interface Metadata {
  complete: boolean;
  ttl: string;
  interval: number;
  links: MetadataLinks;
}

export interface MetadataLinks {
  cache_state_poll: string;
}

export interface Operator {
  id: string;
  source_id: number;
  profile_id: number;
  name: string;
  url: string;
  logo_url: string;
  display_name: string;
  review_state: string;
  sellable: boolean;
  fuzzy_prices: boolean;
  sell_tickets_cutoff: SellTicketsCutoff;
  amenities: OperatorAmenities;
  default_vehicle_type: VehicleType;
  passenger_address_required: boolean;
  source: string;
  referral_deal: boolean;
  referral_deal_type: null;
  display_url: string;
  fraud_check: null;
  passenger_phone_required: boolean;
}

export interface OperatorAmenities {
  classes: Classes;
}

export interface Classes {
  Economy: EconomyClass;
  FLEX: EconomyClass;
  PROMO: EconomyClass;
  "PROMO+": EconomyClass;
  Regular: EconomyClass;
  Standard: EconomyClass;
}

export interface SellTicketsCutoff {
  minutes: number;
}
