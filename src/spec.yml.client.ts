export namespace Schemas {
  // <Schemas>
  export type FactionSymbol
    = | 'COSMIC'
      | 'VOID'
      | 'GALACTIC'
      | 'QUANTUM'
      | 'DOMINION'
      | 'ASTRO'
      | 'CORSAIRS'
      | 'OBSIDIAN'
      | 'AEGIS'
      | 'UNITED'
      | 'SOLITARY'
      | 'COBALT'
      | 'OMEGA'
      | 'ECHO'
      | 'LORDS'
      | 'CULT'
      | 'ANCIENTS'
      | 'SHADOW'
      | 'ETHEREAL'
  export type FactionTraitSymbol
    = | 'BUREAUCRATIC'
      | 'SECRETIVE'
      | 'CAPITALISTIC'
      | 'INDUSTRIOUS'
      | 'PEACEFUL'
      | 'DISTRUSTFUL'
      | 'WELCOMING'
      | 'SMUGGLERS'
      | 'SCAVENGERS'
      | 'REBELLIOUS'
      | 'EXILES'
      | 'PIRATES'
      | 'RAIDERS'
      | 'CLAN'
      | 'GUILD'
      | 'DOMINION'
      | 'FRINGE'
      | 'FORSAKEN'
      | 'ISOLATED'
      | 'LOCALIZED'
      | 'ESTABLISHED'
      | 'NOTABLE'
      | 'DOMINANT'
      | 'INESCAPABLE'
      | 'INNOVATIVE'
      | 'BOLD'
      | 'VISIONARY'
      | 'CURIOUS'
      | 'DARING'
      | 'EXPLORATORY'
      | 'RESOURCEFUL'
      | 'FLEXIBLE'
      | 'COOPERATIVE'
      | 'UNITED'
      | 'STRATEGIC'
      | 'INTELLIGENT'
      | 'RESEARCH_FOCUSED'
      | 'COLLABORATIVE'
      | 'PROGRESSIVE'
      | 'MILITARISTIC'
      | 'TECHNOLOGICALLY_ADVANCED'
      | 'AGGRESSIVE'
      | 'IMPERIALISTIC'
      | 'TREASURE_HUNTERS'
      | 'DEXTEROUS'
      | 'UNPREDICTABLE'
      | 'BRUTAL'
      | 'FLEETING'
      | 'ADAPTABLE'
      | 'SELF_SUFFICIENT'
      | 'DEFENSIVE'
      | 'PROUD'
      | 'DIVERSE'
      | 'INDEPENDENT'
      | 'SELF_INTERESTED'
      | 'FRAGMENTED'
      | 'COMMERCIAL'
      | 'FREE_MARKETS'
      | 'ENTREPRENEURIAL'
  export interface FactionTrait { symbol: FactionTraitSymbol, name: string, description: string }
  export interface Faction {
    symbol: FactionSymbol
    name: string
    description: string
    headquarters?: string | undefined
    traits: Array<FactionTrait>
    isRecruiting: boolean
  }
  export interface Meta { total: number, page: number, limit: number }
  export interface PublicAgent {
    symbol: string
    headquarters: string
    credits: number
    startingFaction: string
    shipCount: number
  }
  export type SystemType
    = | 'NEUTRON_STAR'
      | 'RED_STAR'
      | 'ORANGE_STAR'
      | 'BLUE_STAR'
      | 'YOUNG_STAR'
      | 'WHITE_DWARF'
      | 'BLACK_HOLE'
      | 'HYPERGIANT'
      | 'NEBULA'
      | 'UNSTABLE'
  export type WaypointSymbol = string
  export type WaypointType
    = | 'PLANET'
      | 'GAS_GIANT'
      | 'MOON'
      | 'ORBITAL_STATION'
      | 'JUMP_GATE'
      | 'ASTEROID_FIELD'
      | 'ASTEROID'
      | 'ENGINEERED_ASTEROID'
      | 'ASTEROID_BASE'
      | 'NEBULA'
      | 'DEBRIS_FIELD'
      | 'GRAVITY_WELL'
      | 'ARTIFICIAL_GRAVITY_WELL'
      | 'FUEL_STATION'
  export interface WaypointOrbital { symbol: string }
  export interface SystemWaypoint {
    symbol: WaypointSymbol
    type: WaypointType
    x: number
    y: number
    orbitals: Array<WaypointOrbital>
    orbits?: string | undefined
  }
  export interface SystemFaction { symbol: FactionSymbol }
  export interface System {
    constellation?: string | undefined
    symbol: string
    sectorSymbol: string
    type: SystemType
    x: number
    y: number
    waypoints: Array<SystemWaypoint>
    factions: Array<SystemFaction>
    name?: string | undefined
  }
  export type SystemSymbol = string
  export interface WaypointFaction { symbol: FactionSymbol }
  export type WaypointTraitSymbol
    = | 'UNCHARTED'
      | 'UNDER_CONSTRUCTION'
      | 'MARKETPLACE'
      | 'SHIPYARD'
      | 'OUTPOST'
      | 'SCATTERED_SETTLEMENTS'
      | 'SPRAWLING_CITIES'
      | 'MEGA_STRUCTURES'
      | 'PIRATE_BASE'
      | 'OVERCROWDED'
      | 'HIGH_TECH'
      | 'CORRUPT'
      | 'BUREAUCRATIC'
      | 'TRADING_HUB'
      | 'INDUSTRIAL'
      | 'BLACK_MARKET'
      | 'RESEARCH_FACILITY'
      | 'MILITARY_BASE'
      | 'SURVEILLANCE_OUTPOST'
      | 'EXPLORATION_OUTPOST'
      | 'MINERAL_DEPOSITS'
      | 'COMMON_METAL_DEPOSITS'
      | 'PRECIOUS_METAL_DEPOSITS'
      | 'RARE_METAL_DEPOSITS'
      | 'METHANE_POOLS'
      | 'ICE_CRYSTALS'
      | 'EXPLOSIVE_GASES'
      | 'STRONG_MAGNETOSPHERE'
      | 'VIBRANT_AURORAS'
      | 'SALT_FLATS'
      | 'CANYONS'
      | 'PERPETUAL_DAYLIGHT'
      | 'PERPETUAL_OVERCAST'
      | 'DRY_SEABEDS'
      | 'MAGMA_SEAS'
      | 'SUPERVOLCANOES'
      | 'ASH_CLOUDS'
      | 'VAST_RUINS'
      | 'MUTATED_FLORA'
      | 'TERRAFORMED'
      | 'EXTREME_TEMPERATURES'
      | 'EXTREME_PRESSURE'
      | 'DIVERSE_LIFE'
      | 'SCARCE_LIFE'
      | 'FOSSILS'
      | 'WEAK_GRAVITY'
      | 'STRONG_GRAVITY'
      | 'CRUSHING_GRAVITY'
      | 'TOXIC_ATMOSPHERE'
      | 'CORROSIVE_ATMOSPHERE'
      | 'BREATHABLE_ATMOSPHERE'
      | 'THIN_ATMOSPHERE'
      | 'JOVIAN'
      | 'ROCKY'
      | 'VOLCANIC'
      | 'FROZEN'
      | 'SWAMP'
      | 'BARREN'
      | 'TEMPERATE'
      | 'JUNGLE'
      | 'OCEAN'
      | 'RADIOACTIVE'
      | 'MICRO_GRAVITY_ANOMALIES'
      | 'DEBRIS_CLUSTER'
      | 'DEEP_CRATERS'
      | 'SHALLOW_CRATERS'
      | 'UNSTABLE_COMPOSITION'
      | 'HOLLOWED_INTERIOR'
      | 'STRIPPED'
  export interface WaypointTrait { symbol: WaypointTraitSymbol, name: string, description: string }
  export type WaypointModifierSymbol = 'STRIPPED' | 'UNSTABLE' | 'RADIATION_LEAK' | 'CRITICAL_LIMIT' | 'CIVIL_UNREST'
  export interface WaypointModifier { symbol: WaypointModifierSymbol, name: string, description: string }
  export interface Chart { waypointSymbol: WaypointSymbol, submittedBy: string, submittedOn: string }
  export interface Waypoint {
    symbol: WaypointSymbol
    type: WaypointType
    systemSymbol: SystemSymbol
    x: number
    y: number
    orbitals: Array<WaypointOrbital>
    orbits?: string | undefined
    faction?: WaypointFaction | undefined
    traits: Array<WaypointTrait>
    modifiers?: Array<WaypointModifier> | undefined
    chart?: Chart | undefined
    isUnderConstruction: boolean
  }
  export type TradeSymbol
    = | 'PRECIOUS_STONES'
      | 'QUARTZ_SAND'
      | 'SILICON_CRYSTALS'
      | 'AMMONIA_ICE'
      | 'LIQUID_HYDROGEN'
      | 'LIQUID_NITROGEN'
      | 'ICE_WATER'
      | 'EXOTIC_MATTER'
      | 'ADVANCED_CIRCUITRY'
      | 'GRAVITON_EMITTERS'
      | 'IRON'
      | 'IRON_ORE'
      | 'COPPER'
      | 'COPPER_ORE'
      | 'ALUMINUM'
      | 'ALUMINUM_ORE'
      | 'SILVER'
      | 'SILVER_ORE'
      | 'GOLD'
      | 'GOLD_ORE'
      | 'PLATINUM'
      | 'PLATINUM_ORE'
      | 'DIAMONDS'
      | 'URANITE'
      | 'URANITE_ORE'
      | 'MERITIUM'
      | 'MERITIUM_ORE'
      | 'HYDROCARBON'
      | 'ANTIMATTER'
      | 'FAB_MATS'
      | 'FERTILIZERS'
      | 'FABRICS'
      | 'FOOD'
      | 'JEWELRY'
      | 'MACHINERY'
      | 'FIREARMS'
      | 'ASSAULT_RIFLES'
      | 'MILITARY_EQUIPMENT'
      | 'EXPLOSIVES'
      | 'LAB_INSTRUMENTS'
      | 'AMMUNITION'
      | 'ELECTRONICS'
      | 'SHIP_PLATING'
      | 'SHIP_PARTS'
      | 'EQUIPMENT'
      | 'FUEL'
      | 'MEDICINE'
      | 'DRUGS'
      | 'CLOTHING'
      | 'MICROPROCESSORS'
      | 'PLASTICS'
      | 'POLYNUCLEOTIDES'
      | 'BIOCOMPOSITES'
      | 'QUANTUM_STABILIZERS'
      | 'NANOBOTS'
      | 'AI_MAINFRAMES'
      | 'QUANTUM_DRIVES'
      | 'ROBOTIC_DRONES'
      | 'CYBER_IMPLANTS'
      | 'GENE_THERAPEUTICS'
      | 'NEURAL_CHIPS'
      | 'MOOD_REGULATORS'
      | 'VIRAL_AGENTS'
      | 'MICRO_FUSION_GENERATORS'
      | 'SUPERGRAINS'
      | 'LASER_RIFLES'
      | 'HOLOGRAPHICS'
      | 'SHIP_SALVAGE'
      | 'RELIC_TECH'
      | 'NOVEL_LIFEFORMS'
      | 'BOTANICAL_SPECIMENS'
      | 'CULTURAL_ARTIFACTS'
      | 'FRAME_PROBE'
      | 'FRAME_DRONE'
      | 'FRAME_INTERCEPTOR'
      | 'FRAME_RACER'
      | 'FRAME_FIGHTER'
      | 'FRAME_FRIGATE'
      | 'FRAME_SHUTTLE'
      | 'FRAME_EXPLORER'
      | 'FRAME_MINER'
      | 'FRAME_LIGHT_FREIGHTER'
      | 'FRAME_HEAVY_FREIGHTER'
      | 'FRAME_TRANSPORT'
      | 'FRAME_DESTROYER'
      | 'FRAME_CRUISER'
      | 'FRAME_CARRIER'
      | 'FRAME_BULK_FREIGHTER'
      | 'REACTOR_SOLAR_I'
      | 'REACTOR_FUSION_I'
      | 'REACTOR_FISSION_I'
      | 'REACTOR_CHEMICAL_I'
      | 'REACTOR_ANTIMATTER_I'
      | 'ENGINE_IMPULSE_DRIVE_I'
      | 'ENGINE_ION_DRIVE_I'
      | 'ENGINE_ION_DRIVE_II'
      | 'ENGINE_HYPER_DRIVE_I'
      | 'MODULE_MINERAL_PROCESSOR_I'
      | 'MODULE_GAS_PROCESSOR_I'
      | 'MODULE_CARGO_HOLD_I'
      | 'MODULE_CARGO_HOLD_II'
      | 'MODULE_CARGO_HOLD_III'
      | 'MODULE_CREW_QUARTERS_I'
      | 'MODULE_ENVOY_QUARTERS_I'
      | 'MODULE_PASSENGER_CABIN_I'
      | 'MODULE_MICRO_REFINERY_I'
      | 'MODULE_SCIENCE_LAB_I'
      | 'MODULE_JUMP_DRIVE_I'
      | 'MODULE_JUMP_DRIVE_II'
      | 'MODULE_JUMP_DRIVE_III'
      | 'MODULE_WARP_DRIVE_I'
      | 'MODULE_WARP_DRIVE_II'
      | 'MODULE_WARP_DRIVE_III'
      | 'MODULE_SHIELD_GENERATOR_I'
      | 'MODULE_SHIELD_GENERATOR_II'
      | 'MODULE_ORE_REFINERY_I'
      | 'MODULE_FUEL_REFINERY_I'
      | 'MOUNT_GAS_SIPHON_I'
      | 'MOUNT_GAS_SIPHON_II'
      | 'MOUNT_GAS_SIPHON_III'
      | 'MOUNT_SURVEYOR_I'
      | 'MOUNT_SURVEYOR_II'
      | 'MOUNT_SURVEYOR_III'
      | 'MOUNT_SENSOR_ARRAY_I'
      | 'MOUNT_SENSOR_ARRAY_II'
      | 'MOUNT_SENSOR_ARRAY_III'
      | 'MOUNT_MINING_LASER_I'
      | 'MOUNT_MINING_LASER_II'
      | 'MOUNT_MINING_LASER_III'
      | 'MOUNT_LASER_CANNON_I'
      | 'MOUNT_MISSILE_LAUNCHER_I'
      | 'MOUNT_TURRET_I'
      | 'SHIP_PROBE'
      | 'SHIP_MINING_DRONE'
      | 'SHIP_SIPHON_DRONE'
      | 'SHIP_INTERCEPTOR'
      | 'SHIP_LIGHT_HAULER'
      | 'SHIP_COMMAND_FRIGATE'
      | 'SHIP_EXPLORER'
      | 'SHIP_HEAVY_FREIGHTER'
      | 'SHIP_LIGHT_SHUTTLE'
      | 'SHIP_ORE_HOUND'
      | 'SHIP_REFINING_FREIGHTER'
      | 'SHIP_SURVEYOR'
      | 'SHIP_BULK_FREIGHTER'
  export interface ConstructionMaterial { tradeSymbol: TradeSymbol, required: number, fulfilled: number }
  export interface Construction { symbol: string, materials: Array<ConstructionMaterial>, isComplete: boolean }
  export interface ShipCargoItem { symbol: TradeSymbol, name: string, description: string, units: number }
  export interface ShipCargo { capacity: number, units: number, inventory: Array<ShipCargoItem> }
  export interface TradeGood { symbol: TradeSymbol, name: string, description: string }
  export interface MarketTransaction {
    waypointSymbol: WaypointSymbol
    shipSymbol: string
    tradeSymbol: string
    type: 'PURCHASE' | 'SELL'
    units: number
    pricePerUnit: number
    totalPrice: number
    timestamp: string
  }
  export type SupplyLevel = 'SCARCE' | 'LIMITED' | 'MODERATE' | 'HIGH' | 'ABUNDANT'
  export type ActivityLevel = 'WEAK' | 'GROWING' | 'STRONG' | 'RESTRICTED'
  export interface MarketTradeGood {
    symbol: TradeSymbol
    type: 'EXPORT' | 'IMPORT' | 'EXCHANGE'
    tradeVolume: number
    supply: SupplyLevel
    activity?: ActivityLevel | undefined
    purchasePrice: number
    sellPrice: number
  }
  export interface Market {
    symbol: string
    exports: Array<TradeGood>
    imports: Array<TradeGood>
    exchange: Array<TradeGood>
    transactions?: Array<MarketTransaction> | undefined
    tradeGoods?: Array<MarketTradeGood> | undefined
  }
  export interface JumpGate { symbol: WaypointSymbol, connections: Array<string> }
  export type ShipType
    = | 'SHIP_PROBE'
      | 'SHIP_MINING_DRONE'
      | 'SHIP_SIPHON_DRONE'
      | 'SHIP_INTERCEPTOR'
      | 'SHIP_LIGHT_HAULER'
      | 'SHIP_COMMAND_FRIGATE'
      | 'SHIP_EXPLORER'
      | 'SHIP_HEAVY_FREIGHTER'
      | 'SHIP_LIGHT_SHUTTLE'
      | 'SHIP_ORE_HOUND'
      | 'SHIP_REFINING_FREIGHTER'
      | 'SHIP_SURVEYOR'
      | 'SHIP_BULK_FREIGHTER'
  export interface ShipyardTransaction {
    waypointSymbol: WaypointSymbol
    shipSymbol: string
    shipType: string
    price: number
    agentSymbol: string
    timestamp: string
  }
  export type ShipComponentCondition = number
  export type ShipComponentIntegrity = number
  export type ShipRequirements = Partial<{ power: number, crew: number, slots: number }>
  export type ShipComponentQuality = number
  export interface ShipFrame {
    symbol:
      | 'FRAME_PROBE'
      | 'FRAME_DRONE'
      | 'FRAME_INTERCEPTOR'
      | 'FRAME_RACER'
      | 'FRAME_FIGHTER'
      | 'FRAME_FRIGATE'
      | 'FRAME_SHUTTLE'
      | 'FRAME_EXPLORER'
      | 'FRAME_MINER'
      | 'FRAME_LIGHT_FREIGHTER'
      | 'FRAME_HEAVY_FREIGHTER'
      | 'FRAME_TRANSPORT'
      | 'FRAME_DESTROYER'
      | 'FRAME_CRUISER'
      | 'FRAME_CARRIER'
      | 'FRAME_BULK_FREIGHTER'
    name: string
    condition: ShipComponentCondition
    integrity: ShipComponentIntegrity
    description: string
    moduleSlots: number
    mountingPoints: number
    fuelCapacity: number
    requirements: ShipRequirements
    quality: ShipComponentQuality
  }
  export interface ShipReactor {
    symbol:
      | 'REACTOR_SOLAR_I'
      | 'REACTOR_FUSION_I'
      | 'REACTOR_FISSION_I'
      | 'REACTOR_CHEMICAL_I'
      | 'REACTOR_ANTIMATTER_I'
    name: string
    condition: ShipComponentCondition
    integrity: ShipComponentIntegrity
    description: string
    powerOutput: number
    requirements: ShipRequirements
    quality: ShipComponentQuality
  }
  export interface ShipEngine {
    symbol: 'ENGINE_IMPULSE_DRIVE_I' | 'ENGINE_ION_DRIVE_I' | 'ENGINE_ION_DRIVE_II' | 'ENGINE_HYPER_DRIVE_I'
    name: string
    condition: ShipComponentCondition
    integrity: ShipComponentIntegrity
    description: string
    speed: number
    requirements: ShipRequirements
    quality: ShipComponentQuality
  }
  export interface ShipModule {
    symbol:
      | 'MODULE_MINERAL_PROCESSOR_I'
      | 'MODULE_GAS_PROCESSOR_I'
      | 'MODULE_CARGO_HOLD_I'
      | 'MODULE_CARGO_HOLD_II'
      | 'MODULE_CARGO_HOLD_III'
      | 'MODULE_CREW_QUARTERS_I'
      | 'MODULE_ENVOY_QUARTERS_I'
      | 'MODULE_PASSENGER_CABIN_I'
      | 'MODULE_MICRO_REFINERY_I'
      | 'MODULE_ORE_REFINERY_I'
      | 'MODULE_FUEL_REFINERY_I'
      | 'MODULE_SCIENCE_LAB_I'
      | 'MODULE_JUMP_DRIVE_I'
      | 'MODULE_JUMP_DRIVE_II'
      | 'MODULE_JUMP_DRIVE_III'
      | 'MODULE_WARP_DRIVE_I'
      | 'MODULE_WARP_DRIVE_II'
      | 'MODULE_WARP_DRIVE_III'
      | 'MODULE_SHIELD_GENERATOR_I'
      | 'MODULE_SHIELD_GENERATOR_II'
    name: string
    description: string
    capacity?: number | undefined
    range?: number | undefined
    requirements: ShipRequirements
  }
  export interface ShipMount {
    symbol:
      | 'MOUNT_GAS_SIPHON_I'
      | 'MOUNT_GAS_SIPHON_II'
      | 'MOUNT_GAS_SIPHON_III'
      | 'MOUNT_SURVEYOR_I'
      | 'MOUNT_SURVEYOR_II'
      | 'MOUNT_SURVEYOR_III'
      | 'MOUNT_SENSOR_ARRAY_I'
      | 'MOUNT_SENSOR_ARRAY_II'
      | 'MOUNT_SENSOR_ARRAY_III'
      | 'MOUNT_MINING_LASER_I'
      | 'MOUNT_MINING_LASER_II'
      | 'MOUNT_MINING_LASER_III'
      | 'MOUNT_LASER_CANNON_I'
      | 'MOUNT_MISSILE_LAUNCHER_I'
      | 'MOUNT_TURRET_I'
    name: string
    description: string
    strength?: number | undefined
    deposits?:
      | Array<
        | 'QUARTZ_SAND'
        | 'SILICON_CRYSTALS'
        | 'PRECIOUS_STONES'
        | 'ICE_WATER'
        | 'AMMONIA_ICE'
        | 'IRON_ORE'
        | 'COPPER_ORE'
        | 'SILVER_ORE'
        | 'ALUMINUM_ORE'
        | 'GOLD_ORE'
        | 'PLATINUM_ORE'
        | 'DIAMONDS'
        | 'URANITE_ORE'
        | 'MERITIUM_ORE'
      >
      | undefined
    requirements: ShipRequirements
  }
  export interface ShipyardShip {
    type: ShipType
    name: string
    description: string
    activity?: ActivityLevel | undefined
    supply: SupplyLevel
    purchasePrice: number
    frame: ShipFrame
    reactor: ShipReactor
    engine: ShipEngine
    modules: Array<ShipModule>
    mounts: Array<ShipMount>
    crew: { required: number, capacity: number }
  }
  export interface Shipyard {
    symbol: string
    shipTypes: Array<{ type: ShipType }>
    transactions?: Array<ShipyardTransaction> | undefined
    ships?: Array<ShipyardShip> | undefined
    modificationsFee: number
  }
  export interface ContractPayment { onAccepted: number, onFulfilled: number }
  export interface ContractDeliverGood {
    tradeSymbol: string
    destinationSymbol: string
    unitsRequired: number
    unitsFulfilled: number
  }
  export interface ContractTerms {
    deadline: string
    payment: ContractPayment
    deliver?: Array<ContractDeliverGood> | undefined
  }
  export interface Contract {
    id: string
    factionSymbol: string
    type: 'PROCUREMENT' | 'TRANSPORT' | 'SHUTTLE'
    terms: ContractTerms
    accepted: boolean
    fulfilled: boolean
    expiration: string
    deadlineToAccept?: string | undefined
  }
  export interface Agent {
    accountId: string
    symbol: string
    headquarters: string
    credits: number
    startingFaction: string
    shipCount: number
  }
  export interface AgentEvent { id: string, type: string, message: string, data?: unknown | undefined, createdAt: string }
  export type ShipRole
    = | 'FABRICATOR'
      | 'HARVESTER'
      | 'HAULER'
      | 'INTERCEPTOR'
      | 'EXCAVATOR'
      | 'TRANSPORT'
      | 'REPAIR'
      | 'SURVEYOR'
      | 'COMMAND'
      | 'CARRIER'
      | 'PATROL'
      | 'SATELLITE'
      | 'EXPLORER'
      | 'REFINERY'
  export interface ShipRegistration { name: string, factionSymbol: string, role: ShipRole }
  export interface ShipNavRouteWaypoint {
    symbol: string
    type: WaypointType
    systemSymbol: SystemSymbol
    x: number
    y: number
  }
  export interface ShipNavRoute {
    destination: ShipNavRouteWaypoint
    origin: ShipNavRouteWaypoint
    departureTime: string
    arrival: string
  }
  export type ShipNavStatus = 'IN_TRANSIT' | 'IN_ORBIT' | 'DOCKED'
  export type ShipNavFlightMode = 'DRIFT' | 'STEALTH' | 'CRUISE' | 'BURN'
  export interface ShipNav {
    systemSymbol: SystemSymbol
    waypointSymbol: WaypointSymbol
    route: ShipNavRoute
    status: ShipNavStatus
    flightMode: ShipNavFlightMode
  }
  export interface ShipCrew {
    current: number
    required: number
    capacity: number
    rotation: 'STRICT' | 'RELAXED'
    morale: number
    wages: number
  }
  export interface ShipFuel {
    current: number
    capacity: number
    consumed?: { amount: number, timestamp: string } | undefined
  }
  export interface Cooldown {
    shipSymbol: string
    totalSeconds: number
    remainingSeconds: number
    expiration?: string | undefined
  }
  export interface Ship {
    symbol: string
    registration: ShipRegistration
    nav: ShipNav
    crew: ShipCrew
    frame: ShipFrame
    reactor: ShipReactor
    engine: ShipEngine
    modules: Array<ShipModule>
    mounts: Array<ShipMount>
    cargo: ShipCargo
    fuel: ShipFuel
    cooldown: Cooldown
  }
  export interface ChartTransaction {
    waypointSymbol: WaypointSymbol
    shipSymbol: string
    totalPrice: number
    timestamp: string
  }
  export interface ExtractionYield { symbol: TradeSymbol, units: number }
  export interface Extraction { shipSymbol: string, yield: ExtractionYield }
  export interface ShipConditionEvent {
    symbol:
      | 'REACTOR_OVERLOAD'
      | 'ENERGY_SPIKE_FROM_MINERAL'
      | 'SOLAR_FLARE_INTERFERENCE'
      | 'COOLANT_LEAK'
      | 'POWER_DISTRIBUTION_FLUCTUATION'
      | 'MAGNETIC_FIELD_DISRUPTION'
      | 'HULL_MICROMETEORITE_STRIKES'
      | 'STRUCTURAL_STRESS_FRACTURES'
      | 'CORROSIVE_MINERAL_CONTAMINATION'
      | 'THERMAL_EXPANSION_MISMATCH'
      | 'VIBRATION_DAMAGE_FROM_DRILLING'
      | 'ELECTROMAGNETIC_FIELD_INTERFERENCE'
      | 'IMPACT_WITH_EXTRACTED_DEBRIS'
      | 'FUEL_EFFICIENCY_DEGRADATION'
      | 'COOLANT_SYSTEM_AGEING'
      | 'DUST_MICROABRASIONS'
      | 'THRUSTER_NOZZLE_WEAR'
      | 'EXHAUST_PORT_CLOGGING'
      | 'BEARING_LUBRICATION_FADE'
      | 'SENSOR_CALIBRATION_DRIFT'
      | 'HULL_MICROMETEORITE_DAMAGE'
      | 'SPACE_DEBRIS_COLLISION'
      | 'THERMAL_STRESS'
      | 'VIBRATION_OVERLOAD'
      | 'PRESSURE_DIFFERENTIAL_STRESS'
      | 'ELECTROMAGNETIC_SURGE_EFFECTS'
      | 'ATMOSPHERIC_ENTRY_HEAT'
    component: 'FRAME' | 'REACTOR' | 'ENGINE'
    name: string
    description: string
  }
  export interface SurveyDeposit { symbol: TradeSymbol }
  export type SurveySize = 'SMALL' | 'MODERATE' | 'LARGE'
  export interface Survey {
    signature: string
    symbol: string
    deposits: Array<SurveyDeposit>
    expiration: string
    size: SurveySize
  }
  export interface ScannedSystem {
    symbol: string
    sectorSymbol: string
    type: SystemType
    x: number
    y: number
    distance: number
  }
  export interface ScannedWaypoint {
    symbol: WaypointSymbol
    type: WaypointType
    systemSymbol: SystemSymbol
    x: number
    y: number
    orbitals: Array<WaypointOrbital>
    faction?: WaypointFaction | undefined
    traits: Array<WaypointTrait>
    chart?: Chart | undefined
  }
  export interface ScannedShip {
    symbol: string
    registration: ShipRegistration
    nav: ShipNav
    frame?: { symbol: string } | undefined
    reactor?: { symbol: string } | undefined
    engine: { symbol: string }
    mounts?: Array<{ symbol: string }> | undefined
  }
  export interface ScrapTransaction {
    waypointSymbol: WaypointSymbol
    shipSymbol: string
    totalPrice: number
    timestamp: string
  }
  export interface RepairTransaction {
    waypointSymbol: WaypointSymbol
    shipSymbol: string
    totalPrice: number
    timestamp: string
  }
  export interface SiphonYield { symbol: TradeSymbol, units: number }
  export interface Siphon { shipSymbol: string, yield: SiphonYield }
  export interface ShipModificationTransaction {
    waypointSymbol: string
    shipSymbol: string
    tradeSymbol: string
    totalPrice: number
    timestamp: string
  }

  // </Schemas>
}

export namespace Endpoints {
  // <Endpoints>

  export interface get_Get__factions {
    method: 'GET'
    path: '/factions'
    requestFormat: 'json'
    parameters: {
      query: Partial<{ page: number, limit: number }>
    }
    responses: { 200: { data: Array<Schemas.Faction>, meta: Schemas.Meta } }
  }
  export interface get_Get__faction {
    method: 'GET'
    path: '/factions/{factionSymbol}'
    requestFormat: 'json'
    parameters: {
      path: { factionSymbol: string }
    }
    responses: { 200: { data: Schemas.Faction } }
  }
  export interface get_Get__agents {
    method: 'GET'
    path: '/agents'
    requestFormat: 'json'
    parameters: {
      query: Partial<{ page: number, limit: number }>
    }
    responses: { 200: { data: Array<Schemas.PublicAgent>, meta: Schemas.Meta } }
  }
  export interface get_Get__agent {
    method: 'GET'
    path: '/agents/{agentSymbol}'
    requestFormat: 'json'
    parameters: {
      path: { agentSymbol: string }
    }
    responses: { 200: { data: Schemas.PublicAgent } }
  }
  export interface get_Get__supply__chain {
    method: 'GET'
    path: '/market/supply-chain'
    requestFormat: 'json'
    parameters: never
    responses: { 200: { data: { exportToImportMap: Record<string, Array<string>> } } }
  }
  export interface get_Get__status {
    method: 'GET'
    path: '/'
    requestFormat: 'json'
    parameters: never
    responses: {
      200: {
        status: string
        version: string
        resetDate: string
        description: string
        stats: { accounts?: number | undefined, agents: number, ships: number, systems: number, waypoints: number }
        health: Partial<{ lastMarketUpdate: string }>
        leaderboards: {
          mostCredits: Array<{ agentSymbol: string, credits: number }>
          mostSubmittedCharts: Array<{ agentSymbol: string, chartCount: number }>
        }
        serverResets: { next: string, frequency: string }
        announcements: Array<{ title: string, body: string }>
        links: Array<{ name: string, url: string }>
      }
    }
  }
  export interface get_Get__error__codes {
    method: 'GET'
    path: '/error-codes'
    requestFormat: 'json'
    parameters: never
    responses: { 200: { errorCodes: Array<{ code: number, name: string }> } }
  }
  export interface get_Get__systems {
    method: 'GET'
    path: '/systems'
    requestFormat: 'json'
    parameters: {
      query: Partial<{ page: number, limit: number }>
    }
    responses: { 200: { data: Array<Schemas.System>, meta: Schemas.Meta } }
  }
  export interface get_Get__system {
    method: 'GET'
    path: '/systems/{systemSymbol}'
    requestFormat: 'json'
    parameters: {
      path: { systemSymbol: string }
    }
    responses: { 200: { data: Schemas.System } }
  }
  export interface get_Get__system__waypoints {
    method: 'GET'
    path: '/systems/{systemSymbol}/waypoints'
    requestFormat: 'json'
    parameters: {
      query: Partial<{
        page: number
        limit: number
        type: Schemas.WaypointType
        traits: Array<Schemas.WaypointTraitSymbol> | Schemas.WaypointTraitSymbol
      }>
      path: { systemSymbol: string }
    }
    responses: { 200: { data: Array<Schemas.Waypoint>, meta: Schemas.Meta } }
  }
  export interface get_Get__waypoint {
    method: 'GET'
    path: '/systems/{systemSymbol}/waypoints/{waypointSymbol}'
    requestFormat: 'json'
    parameters: {
      path: { systemSymbol: string, waypointSymbol: string }
    }
    responses: { 200: { data: Schemas.Waypoint } }
  }
  export interface get_Get__construction {
    method: 'GET'
    path: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction'
    requestFormat: 'json'
    parameters: {
      path: { systemSymbol: string, waypointSymbol: string }
    }
    responses: { 200: { data: Schemas.Construction } }
  }
  export interface post_Supply__construction {
    method: 'POST'
    path: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply'
    requestFormat: 'json'
    parameters: {
      path: { systemSymbol: string, waypointSymbol: string }

      body: { shipSymbol: string, tradeSymbol: Schemas.TradeSymbol, units: number }
    }
    responses: { 201: { data: { construction: Schemas.Construction, cargo: Schemas.ShipCargo } } }
  }
  export interface get_Get__market {
    method: 'GET'
    path: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/market'
    requestFormat: 'json'
    parameters: {
      path: { systemSymbol: string, waypointSymbol: string }
    }
    responses: { 200: { data: Schemas.Market } }
  }
  export interface get_Get__jump__gate {
    method: 'GET'
    path: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate'
    requestFormat: 'json'
    parameters: {
      path: { systemSymbol: string, waypointSymbol: string }
    }
    responses: { 200: { data: Schemas.JumpGate } }
  }
  export interface get_Get__shipyard {
    method: 'GET'
    path: '/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard'
    requestFormat: 'json'
    parameters: {
      path: { systemSymbol: string, waypointSymbol: string }
    }
    responses: { 200: { data: Schemas.Shipyard } }
  }
  export interface get_Websocket__departure__events {
    method: 'GET'
    path: '/my/socket.io'
    requestFormat: 'json'
    parameters: never
    responses: { 200: unknown }
  }
  export interface get_Get__contracts {
    method: 'GET'
    path: '/my/contracts'
    requestFormat: 'json'
    parameters: {
      query: Partial<{ page: number, limit: number }>
    }
    responses: { 200: { data: Array<Schemas.Contract>, meta: Schemas.Meta } }
  }
  export interface get_Get__contract {
    method: 'GET'
    path: '/my/contracts/{contractId}'
    requestFormat: 'json'
    parameters: {
      path: { contractId: string }
    }
    responses: { 200: { data: Schemas.Contract } }
  }
  export interface post_Accept__contract {
    method: 'POST'
    path: '/my/contracts/{contractId}/accept'
    requestFormat: 'json'
    parameters: {
      path: { contractId: string }
    }
    responses: { 200: { data: { contract: Schemas.Contract, agent: Schemas.Agent } } }
  }
  export interface post_Fulfill__contract {
    method: 'POST'
    path: '/my/contracts/{contractId}/fulfill'
    requestFormat: 'json'
    parameters: {
      path: { contractId: string }
    }
    responses: { 200: { data: { contract: Schemas.Contract, agent: Schemas.Agent } } }
  }
  export interface post_Deliver__contract {
    method: 'POST'
    path: '/my/contracts/{contractId}/deliver'
    requestFormat: 'json'
    parameters: {
      path: { contractId: string }

      body: { shipSymbol: string, tradeSymbol: string, units: number }
    }
    responses: { 200: { data: { contract: Schemas.Contract, cargo: Schemas.ShipCargo } } }
  }
  export interface get_Get__my__factions {
    method: 'GET'
    path: '/my/factions'
    requestFormat: 'json'
    parameters: {
      query: Partial<{ page: number, limit: number }>
    }
    responses: { 200: { data: Array<{ symbol: string, reputation: number }>, meta: Schemas.Meta } }
  }
  export interface get_Get__my__agent {
    method: 'GET'
    path: '/my/agent'
    requestFormat: 'json'
    parameters: never
    responses: { 200: { data: Schemas.Agent } }
  }
  export interface get_Get__my__agent__events {
    method: 'GET'
    path: '/my/agent/events'
    requestFormat: 'json'
    parameters: never
    responses: { 200: { data: Array<Schemas.AgentEvent> } }
  }
  export interface get_Get__my__ships {
    method: 'GET'
    path: '/my/ships'
    requestFormat: 'json'
    parameters: {
      query: Partial<{ page: number, limit: number }>
    }
    responses: { 200: { data: Array<Schemas.Ship>, meta: Schemas.Meta } }
  }
  export interface post_Purchase__ship {
    method: 'POST'
    path: '/my/ships'
    requestFormat: 'json'
    parameters: {
      body: { shipType: Schemas.ShipType, waypointSymbol: string }
    }
    responses: {
      201: { data: { ship: Schemas.Ship, agent: Schemas.Agent, transaction: Schemas.ShipyardTransaction } }
    }
  }
  export interface get_Get__my__account {
    method: 'GET'
    path: '/my/account'
    requestFormat: 'json'
    parameters: never
    responses: {
      200: { data: { account: { id: string, email: string | null, token?: string | undefined, createdAt: string } } }
    }
  }
  export interface get_Get__my__ship {
    method: 'GET'
    path: '/my/ships/{shipSymbol}'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: Schemas.Ship } }
  }
  export interface post_Create__chart {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/chart'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: {
      201: {
        data: {
          chart: Schemas.Chart
          waypoint: Schemas.Waypoint
          transaction: Schemas.ChartTransaction
          agent: Schemas.Agent
        }
      }
    }
  }
  export interface post_Negotiate__contract {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/negotiate/contract'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 201: { data: { contract: Schemas.Contract } } }
  }
  export interface get_Get__ship__cooldown {
    method: 'GET'
    path: '/my/ships/{shipSymbol}/cooldown'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: Schemas.Cooldown }, 204: unknown }
  }
  export interface post_Dock__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/dock'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: { nav: Schemas.ShipNav } } }
  }
  export interface post_Extract__resources {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/extract'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: {
      201: {
        data: {
          extraction: Schemas.Extraction
          cooldown: Schemas.Cooldown
          cargo: Schemas.ShipCargo
          modifiers?: Array<Schemas.WaypointModifier> | undefined
          events: Array<Schemas.ShipConditionEvent>
        }
      }
    }
  }
  export interface post_Extract__resources__with__survey {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/extract/survey'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: Schemas.Survey
    }
    responses: {
      201: {
        data: {
          extraction: Schemas.Extraction
          cooldown: Schemas.Cooldown
          cargo: Schemas.ShipCargo
          modifiers?: Array<Schemas.WaypointModifier> | undefined
          events: Array<Schemas.ShipConditionEvent>
        }
      }
    }
  }
  export interface post_Jettison {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/jettison'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { symbol: Schemas.TradeSymbol, units: number }
    }
    responses: { 200: { data: { cargo: Schemas.ShipCargo } } }
  }
  export interface post_Jump__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/jump'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { waypointSymbol: string }
    }
    responses: {
      200: {
        data: {
          nav: Schemas.ShipNav
          cooldown: Schemas.Cooldown
          transaction: Schemas.MarketTransaction
          agent: Schemas.Agent
        }
      }
    }
  }
  export interface post_Create__ship__system__scan {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/scan/systems'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 201: { data: { cooldown: Schemas.Cooldown, systems: Array<Schemas.ScannedSystem> } } }
  }
  export interface post_Create__ship__waypoint__scan {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/scan/waypoints'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 201: { data: { cooldown: Schemas.Cooldown, waypoints: Array<Schemas.ScannedWaypoint> } } }
  }
  export interface post_Create__ship__ship__scan {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/scan/ships'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 201: { data: { cooldown: Schemas.Cooldown, ships: Array<Schemas.ScannedShip> } } }
  }
  export interface post_Scrap__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/scrap'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: { agent: Schemas.Agent, transaction: Schemas.ScrapTransaction } } }
  }
  export interface get_Get__scrap__ship {
    method: 'GET'
    path: '/my/ships/{shipSymbol}/scrap'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: { transaction: Schemas.ScrapTransaction } } }
  }
  export interface post_Navigate__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/navigate'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { waypointSymbol: string }
    }
    responses: {
      200: { data: { nav: Schemas.ShipNav, fuel: Schemas.ShipFuel, events: Array<Schemas.ShipConditionEvent> } }
    }
  }
  export interface post_Warp__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/warp'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { waypointSymbol: string }
    }
    responses: {
      200: { data: { nav: Schemas.ShipNav, fuel: Schemas.ShipFuel, events: Array<Schemas.ShipConditionEvent> } }
    }
  }
  export interface post_Orbit__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/orbit'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: { nav: Schemas.ShipNav } } }
  }
  export interface post_Purchase__cargo {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/purchase'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { symbol: Schemas.TradeSymbol, units: number }
    }
    responses: {
      201: { data: { cargo: Schemas.ShipCargo, transaction: Schemas.MarketTransaction, agent: Schemas.Agent } }
    }
  }
  export interface post_Ship__refine {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/refine'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: {
        produce: 'IRON' | 'COPPER' | 'SILVER' | 'GOLD' | 'ALUMINUM' | 'PLATINUM' | 'URANITE' | 'MERITIUM' | 'FUEL'
      }
    }
    responses: {
      201: {
        data: {
          cargo: Schemas.ShipCargo
          cooldown: Schemas.Cooldown
          produced: Array<{ tradeSymbol: Schemas.TradeSymbol, units: number }>
          consumed: Array<{ tradeSymbol: Schemas.TradeSymbol, units: number }>
        }
      }
    }
  }
  export interface post_Refuel__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/refuel'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: Partial<{ units: number, fromCargo: boolean | null }>
    }
    responses: {
      200: {
        data: {
          agent: Schemas.Agent
          fuel: Schemas.ShipFuel
          cargo?: Schemas.ShipCargo | undefined
          transaction: Schemas.MarketTransaction
        }
      }
    }
  }
  export interface post_Repair__ship {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/repair'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: { agent: Schemas.Agent, ship: Schemas.Ship, transaction: Schemas.RepairTransaction } } }
  }
  export interface get_Get__repair__ship {
    method: 'GET'
    path: '/my/ships/{shipSymbol}/repair'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: { transaction: Schemas.RepairTransaction } } }
  }
  export interface post_Sell__cargo {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/sell'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { symbol: Schemas.TradeSymbol, units: number }
    }
    responses: {
      201: { data: { cargo: Schemas.ShipCargo, transaction: Schemas.MarketTransaction, agent: Schemas.Agent } }
    }
  }
  export interface post_Siphon__resources {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/siphon'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: {
      201: {
        data: {
          siphon: Schemas.Siphon
          cooldown: Schemas.Cooldown
          cargo: Schemas.ShipCargo
          events: Array<Schemas.ShipConditionEvent>
        }
      }
    }
  }
  export interface post_Create__survey {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/survey'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 201: { data: { cooldown: Schemas.Cooldown, surveys: Array<Schemas.Survey> } } }
  }
  export interface post_Transfer__cargo {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/transfer'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { tradeSymbol: Schemas.TradeSymbol, units: number, shipSymbol: string }
    }
    responses: { 200: { data: { cargo: Schemas.ShipCargo, targetCargo: Schemas.ShipCargo } } }
  }
  export interface get_Get__my__ship__cargo {
    method: 'GET'
    path: '/my/ships/{shipSymbol}/cargo'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: Schemas.ShipCargo } }
  }
  export interface get_Get__ship__modules {
    method: 'GET'
    path: '/my/ships/{shipSymbol}/modules'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: Array<Schemas.ShipModule> } }
  }
  export interface post_Install__ship__module {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/modules/install'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { symbol: string }
    }
    responses: {
      201: {
        data: {
          agent: Schemas.Agent
          modules: Array<Schemas.ShipModule>
          cargo: Schemas.ShipCargo
          transaction: Schemas.ShipModificationTransaction
        }
      }
    }
  }
  export interface post_Remove__ship__module {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/modules/remove'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { symbol: string }
    }
    responses: {
      201: {
        data: {
          agent: Schemas.Agent
          modules: Array<Schemas.ShipModule>
          cargo: Schemas.ShipCargo
          transaction: Schemas.ShipModificationTransaction
        }
      }
    }
  }
  export interface get_Get__mounts {
    method: 'GET'
    path: '/my/ships/{shipSymbol}/mounts'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: Array<Schemas.ShipMount> } }
  }
  export interface post_Install__mount {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/mounts/install'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { symbol: string }
    }
    responses: {
      201: {
        data: {
          agent: Schemas.Agent
          mounts: Array<Schemas.ShipMount>
          cargo: Schemas.ShipCargo
          transaction: Schemas.ShipModificationTransaction
        }
      }
    }
  }
  export interface post_Remove__mount {
    method: 'POST'
    path: '/my/ships/{shipSymbol}/mounts/remove'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: { symbol: string }
    }
    responses: {
      201: {
        data: {
          agent: Schemas.Agent
          mounts: Array<Schemas.ShipMount>
          cargo: Schemas.ShipCargo
          transaction: Schemas.ShipModificationTransaction
        }
      }
    }
  }
  export interface get_Get__ship__nav {
    method: 'GET'
    path: '/my/ships/{shipSymbol}/nav'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }
    }
    responses: { 200: { data: Schemas.ShipNav } }
  }
  export interface patch_Patch__ship__nav {
    method: 'PATCH'
    path: '/my/ships/{shipSymbol}/nav'
    requestFormat: 'json'
    parameters: {
      path: { shipSymbol: string }

      body: Partial<{ flightMode: Schemas.ShipNavFlightMode }>
    }
    responses: {
      200: { data: { nav: Schemas.ShipNav, fuel: Schemas.ShipFuel, events: Array<Schemas.ShipConditionEvent> } }
    }
  }
  export interface post_Register {
    method: 'POST'
    path: '/register'
    requestFormat: 'json'
    parameters: {
      body: { symbol: string, faction: Schemas.FactionSymbol }
    }
    responses: {
      201: {
        data: {
          token: string
          agent: Schemas.Agent
          faction: Schemas.Faction
          contract: Schemas.Contract
          ships: Array<Schemas.Ship>
        }
      }
    }
  }

  // </Endpoints>
}

// <EndpointByMethod>
export interface EndpointByMethod {
  get: {
    '/factions': Endpoints.get_Get__factions
    '/factions/{factionSymbol}': Endpoints.get_Get__faction
    '/agents': Endpoints.get_Get__agents
    '/agents/{agentSymbol}': Endpoints.get_Get__agent
    '/market/supply-chain': Endpoints.get_Get__supply__chain
    '/': Endpoints.get_Get__status
    '/error-codes': Endpoints.get_Get__error__codes
    '/systems': Endpoints.get_Get__systems
    '/systems/{systemSymbol}': Endpoints.get_Get__system
    '/systems/{systemSymbol}/waypoints': Endpoints.get_Get__system__waypoints
    '/systems/{systemSymbol}/waypoints/{waypointSymbol}': Endpoints.get_Get__waypoint
    '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction': Endpoints.get_Get__construction
    '/systems/{systemSymbol}/waypoints/{waypointSymbol}/market': Endpoints.get_Get__market
    '/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate': Endpoints.get_Get__jump__gate
    '/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard': Endpoints.get_Get__shipyard
    '/my/socket.io': Endpoints.get_Websocket__departure__events
    '/my/contracts': Endpoints.get_Get__contracts
    '/my/contracts/{contractId}': Endpoints.get_Get__contract
    '/my/factions': Endpoints.get_Get__my__factions
    '/my/agent': Endpoints.get_Get__my__agent
    '/my/agent/events': Endpoints.get_Get__my__agent__events
    '/my/ships': Endpoints.get_Get__my__ships
    '/my/account': Endpoints.get_Get__my__account
    '/my/ships/{shipSymbol}': Endpoints.get_Get__my__ship
    '/my/ships/{shipSymbol}/cooldown': Endpoints.get_Get__ship__cooldown
    '/my/ships/{shipSymbol}/scrap': Endpoints.get_Get__scrap__ship
    '/my/ships/{shipSymbol}/repair': Endpoints.get_Get__repair__ship
    '/my/ships/{shipSymbol}/cargo': Endpoints.get_Get__my__ship__cargo
    '/my/ships/{shipSymbol}/modules': Endpoints.get_Get__ship__modules
    '/my/ships/{shipSymbol}/mounts': Endpoints.get_Get__mounts
    '/my/ships/{shipSymbol}/nav': Endpoints.get_Get__ship__nav
  }
  post: {
    '/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply': Endpoints.post_Supply__construction
    '/my/contracts/{contractId}/accept': Endpoints.post_Accept__contract
    '/my/contracts/{contractId}/fulfill': Endpoints.post_Fulfill__contract
    '/my/contracts/{contractId}/deliver': Endpoints.post_Deliver__contract
    '/my/ships': Endpoints.post_Purchase__ship
    '/my/ships/{shipSymbol}/chart': Endpoints.post_Create__chart
    '/my/ships/{shipSymbol}/negotiate/contract': Endpoints.post_Negotiate__contract
    '/my/ships/{shipSymbol}/dock': Endpoints.post_Dock__ship
    '/my/ships/{shipSymbol}/extract': Endpoints.post_Extract__resources
    '/my/ships/{shipSymbol}/extract/survey': Endpoints.post_Extract__resources__with__survey
    '/my/ships/{shipSymbol}/jettison': Endpoints.post_Jettison
    '/my/ships/{shipSymbol}/jump': Endpoints.post_Jump__ship
    '/my/ships/{shipSymbol}/scan/systems': Endpoints.post_Create__ship__system__scan
    '/my/ships/{shipSymbol}/scan/waypoints': Endpoints.post_Create__ship__waypoint__scan
    '/my/ships/{shipSymbol}/scan/ships': Endpoints.post_Create__ship__ship__scan
    '/my/ships/{shipSymbol}/scrap': Endpoints.post_Scrap__ship
    '/my/ships/{shipSymbol}/navigate': Endpoints.post_Navigate__ship
    '/my/ships/{shipSymbol}/warp': Endpoints.post_Warp__ship
    '/my/ships/{shipSymbol}/orbit': Endpoints.post_Orbit__ship
    '/my/ships/{shipSymbol}/purchase': Endpoints.post_Purchase__cargo
    '/my/ships/{shipSymbol}/refine': Endpoints.post_Ship__refine
    '/my/ships/{shipSymbol}/refuel': Endpoints.post_Refuel__ship
    '/my/ships/{shipSymbol}/repair': Endpoints.post_Repair__ship
    '/my/ships/{shipSymbol}/sell': Endpoints.post_Sell__cargo
    '/my/ships/{shipSymbol}/siphon': Endpoints.post_Siphon__resources
    '/my/ships/{shipSymbol}/survey': Endpoints.post_Create__survey
    '/my/ships/{shipSymbol}/transfer': Endpoints.post_Transfer__cargo
    '/my/ships/{shipSymbol}/modules/install': Endpoints.post_Install__ship__module
    '/my/ships/{shipSymbol}/modules/remove': Endpoints.post_Remove__ship__module
    '/my/ships/{shipSymbol}/mounts/install': Endpoints.post_Install__mount
    '/my/ships/{shipSymbol}/mounts/remove': Endpoints.post_Remove__mount
    '/register': Endpoints.post_Register
  }
  patch: {
    '/my/ships/{shipSymbol}/nav': Endpoints.patch_Patch__ship__nav
  }
}

// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod['get']
export type PostEndpoints = EndpointByMethod['post']
export type PatchEndpoints = EndpointByMethod['patch']
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export interface EndpointParameters {
  body?: unknown
  query?: Record<string, unknown>
  header?: Record<string, unknown>
  path?: Record<string, unknown>
}

export type MutationMethod = 'post' | 'put' | 'patch' | 'delete'
export type Method = 'get' | 'head' | 'options' | MutationMethod

type RequestFormat = 'json' | 'form-data' | 'form-url' | 'binary' | 'text'

export interface DefaultEndpoint {
  parameters?: EndpointParameters | undefined
  responses?: Record<string, unknown>
  responseHeaders?: Record<string, unknown>
}

export interface Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> {
  operationId: string
  method: Method
  path: string
  requestFormat: RequestFormat
  parameters?: TConfig['parameters']
  meta: {
    alias: string
    hasParameters: boolean
    areParametersRequired: boolean
  }
  responses?: TConfig['responses']
  responseHeaders?: TConfig['responseHeaders']
}

export interface Fetcher {
  decodePathParams?: (path: string, pathParams: Record<string, string>) => string
  encodeSearchParams?: (searchParams: Record<string, unknown> | undefined) => URLSearchParams
  //
  fetch: (input: {
    method: Method
    url: URL
    urlSearchParams?: URLSearchParams | undefined
    parameters?: EndpointParameters | undefined
    path: string
    overrides?: RequestInit
    throwOnStatusError?: boolean
  }) => Promise<Response>
  parseResponseData?: (response: Response) => Promise<unknown>
}

export const successStatusCodes = [
  200,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  226,
  300,
  301,
  302,
  303,
  304,
  305,
  306,
  307,
  308,
] as const
export type SuccessStatusCode = (typeof successStatusCodes)[number]

export const errorStatusCodes = [
  400,
  401,
  402,
  403,
  404,
  405,
  406,
  407,
  408,
  409,
  410,
  411,
  412,
  413,
  414,
  415,
  416,
  417,
  418,
  421,
  422,
  423,
  424,
  425,
  426,
  428,
  429,
  431,
  451,
  500,
  501,
  502,
  503,
  504,
  505,
  506,
  507,
  508,
  510,
  511,
] as const
export type ErrorStatusCode = (typeof errorStatusCodes)[number]

// Taken from https://github.com/unjs/fetchdts/blob/ec4eaeab5d287116171fc1efd61f4a1ad34e4609/src/fetch.ts#L3
export interface TypedHeaders<TypedHeaderValues extends Record<string, string> | unknown>
  extends Omit<Headers, 'append' | 'delete' | 'get' | 'getSetCookie' | 'has' | 'set' | 'forEach'> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
  append: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
  delete: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => void
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
  get: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
  ) => (Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string) | null
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
  getSetCookie: () => string[]
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
  has: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(name: Name) => boolean
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
  set: <Name extends Extract<keyof TypedHeaderValues, string> | (string & {})>(
    name: Name,
    value: Lowercase<Name> extends keyof TypedHeaderValues ? TypedHeaderValues[Lowercase<Name>] : string,
  ) => void
  forEach: (
    callbackfn: (
      value: TypedHeaderValues[keyof TypedHeaderValues] | (string & {}),
      key: Extract<keyof TypedHeaderValues, string> | (string & {}),
      parent: TypedHeaders<TypedHeaderValues>,
    ) => void,
    thisArg?: any,
  ) => void
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedSuccessResponse<TSuccess, TStatusCode, THeaders>
  extends Omit<Response, 'ok' | 'status' | 'json' | 'headers'> {
  ok: true
  status: TStatusCode
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>
  data: TSuccess
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TSuccess>
}

/** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */
export interface TypedErrorResponse<TData, TStatusCode, THeaders>
  extends Omit<Response, 'ok' | 'status' | 'json' | 'headers'> {
  ok: false
  status: TStatusCode
  headers: never extends THeaders ? Headers : TypedHeaders<THeaders>
  data: TData
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) */
  json: () => Promise<TData>
}

export type TypedApiResponse<TAllResponses extends Record<string | number, unknown> = {}, THeaders = {}> = {
  [K in keyof TAllResponses]: K extends string
    ? K extends `${infer TStatusCode extends number}`
      ? TStatusCode extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], TStatusCode, K extends keyof THeaders ? THeaders[K] : never>
      : never
    : K extends number
      ? K extends SuccessStatusCode
        ? TypedSuccessResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
        : TypedErrorResponse<TAllResponses[K], K, K extends keyof THeaders ? THeaders[K] : never>
      : never;
}[keyof TAllResponses]

export type SafeApiResponse<TEndpoint> = TEndpoint extends { responses: infer TResponses }
  ? TResponses extends Record<string, unknown>
    ? TypedApiResponse<TResponses, TEndpoint extends { responseHeaders: infer THeaders } ? THeaders : never>
    : never
  : never

export type InferResponseByStatus<TEndpoint, TStatusCode> = Extract<
  SafeApiResponse<TEndpoint>,
  { status: TStatusCode }
>

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T]

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T]
type NotNever<T> = [T] extends [never] ? false : true

// </ApiClientTypes>

// <TypedStatusError>
export class TypedStatusError<TData = unknown> extends Error {
  response: TypedErrorResponse<TData, ErrorStatusCode, unknown>
  status: number
  constructor(response: TypedErrorResponse<TData, ErrorStatusCode, unknown>) {
    super(`HTTP ${response.status}: ${response.statusText}`)
    this.name = 'TypedStatusError'
    this.response = response
    this.status = response.status
  }
}
// </TypedStatusError>

// <ApiClient>
export class ApiClient {
  baseUrl: string = ''
  successStatusCodes = successStatusCodes
  errorStatusCodes = errorStatusCodes

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl
    return this
  }

  /**
   * Replace path parameters in URL
   * Supports both OpenAPI format {param} and Express format :param
   */
  defaultDecodePathParams = (url: string, params: Record<string, string>): string => {
    return url
      .replace(/\{(\w+)\}/g, (_, key: string) => params[key] || `{${key}}`)
      .replace(/:(\w+)/g, (_, key: string) => params[key] || `:${key}`)
  }

  /** Uses URLSearchParams, skips null/undefined values */
  defaultEncodeSearchParams = (queryParams: Record<string, unknown> | undefined): URLSearchParams | undefined => {
    if (!queryParams) {
      return
    }

    const searchParams = new URLSearchParams()
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value != null) {
        // Skip null/undefined values
        if (Array.isArray(value)) {
          value.forEach(val => val != null && searchParams.append(key, String(val)))
        } else {
          searchParams.append(key, String(value))
        }
      }
    })

    return searchParams
  }

  defaultParseResponseData = async (response: Response): Promise<unknown> => {
    const contentType = response.headers.get('content-type') ?? ''
    if (contentType.startsWith('text/')) {
      return await response.text()
    }

    if (contentType === 'application/octet-stream') {
      return await response.arrayBuffer()
    }

    if (
      contentType.includes('application/json')
      || (contentType.includes('application/') && contentType.includes('json'))
      || contentType === '*/*'
    ) {
      try {
        return await response.json()
      } catch {
        return undefined
      }
    }
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>['data']>

  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>

  get<Path extends keyof GetEndpoints, _TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request('get', path, ...params)
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>['data']>

  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>

  post<Path extends keyof PostEndpoints, _TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request('post', path, ...params)
  }
  // </ApiClient.post>

  // <ApiClient.patch>
  patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>['data']>

  patch<Path extends keyof PatchEndpoints, TEndpoint extends PatchEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>

  patch<Path extends keyof PatchEndpoints, _TEndpoint extends PatchEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    return this.request('patch', path, ...params)
  }
  // </ApiClient.patch>

  // <ApiClient.request>
  /**
   * Generic request method with full type-safety for any endpoint
   */
  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: false, throwOnStatusError?: boolean }
    >
  ): Promise<Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>['data']>

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(
    method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<
      TEndpoint extends { parameters: infer UParams }
        ? NotNever<UParams> extends true
          ? UParams & { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
          : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
        : { overrides?: RequestInit, withResponse?: true, throwOnStatusError?: boolean }
    >
  ): Promise<SafeApiResponse<TEndpoint>>

  request<
    TMethod extends keyof EndpointByMethod,
    TPath extends keyof EndpointByMethod[TMethod],
    TEndpoint extends EndpointByMethod[TMethod][TPath],
  >(method: TMethod,
    path: TPath,
    ...params: MaybeOptionalArg<any>
  ): Promise<any> {
    const requestParams = params[0]
    const withResponse = requestParams?.withResponse
    const {
      withResponse: _,
      throwOnStatusError = !withResponse,
      overrides,
      ...fetchParams
    } = requestParams || {}

    const parametersToSend: EndpointParameters = {}
    if (requestParams?.body !== undefined) {
      (parametersToSend as any).body = requestParams.body
    }
    if (requestParams?.query !== undefined) {
      (parametersToSend as any).query = requestParams.query
    }
    if (requestParams?.header !== undefined) {
      (parametersToSend as any).header = requestParams.header
    }
    if (requestParams?.path !== undefined) {
      (parametersToSend as any).path = requestParams.path
    }

    const resolvedPath = (this.fetcher.decodePathParams ?? this.defaultDecodePathParams)(
      this.baseUrl + (path as string),
      (parametersToSend.path ?? {}) as Record<string, string>,
    )
    const url = new URL(resolvedPath)
    const urlSearchParams = (this.fetcher.encodeSearchParams ?? this.defaultEncodeSearchParams)(parametersToSend.query)

    const promise = this.fetcher
      .fetch({
        method,
        path: path as string,
        url,
        urlSearchParams,
        parameters: Object.keys(fetchParams).length ? fetchParams : undefined,
        overrides,
        throwOnStatusError,
      })
      .then(async (response) => {
        const data = await (this.fetcher.parseResponseData ?? this.defaultParseResponseData)(response)
        const typedResponse = Object.assign(response, {
          data,
          json: () => Promise.resolve(data),
        }) as SafeApiResponse<TEndpoint>

        if (throwOnStatusError && errorStatusCodes.includes(response.status as never)) {
          throw new TypedStatusError(typedResponse as never)
        }

        return withResponse ? typedResponse : data
      })

    return promise as Extract<InferResponseByStatus<TEndpoint, SuccessStatusCode>, { data: {} }>['data']
  }
  // </ApiClient.request>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? '')
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));

 // With error handling
 const result = await api.get("/users/{id}", { path: { id: "123" }, withResponse: true });
 if (result.ok) {
   // Access data directly
   const user = result.data;
   console.log(user);

   // Or use the json() method for compatibility
   const userFromJson = await result.json();
   console.log(userFromJson);
 } else {
   const error = result.data;
   console.error(`Error ${result.status}:`, error);
 }
 */

// </ApiClient>
