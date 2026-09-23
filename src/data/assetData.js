/**
 * Paths for original IDHAR UDHAR illustrations.
 * Replace a file in public/assets/3d and keep the same path,
 * or update only this map if a filename changes.
 */

const vehicles = "/assets/3d/vehicles"
const services = "/assets/3d/services"
const features = "/assets/3d/features"
const steps = "/assets/3d/how-it-works"

export const assets = {
  heroScene: "/assets/3d/hero/hero-delivery-scene.svg",
  cityRoute: "/assets/3d/hero/city-route.svg",
  contactPin: "/assets/3d/contact/ahmedabad-pin.svg",

  vehicles: {
    bike: `${vehicles}/bike.svg`,
    truck: `${vehicles}/truck.svg`,
    "mini-truck": `${vehicles}/mini-truck.svg`,
    tempo: `${vehicles}/tempo.svg`,
    "large-tempo": `${vehicles}/large-tempo.svg`,
  },

  services: {
    "local-parcel": `${services}/local-parcel.svg`,
    "business-deliveries": `${services}/business-deliveries.svg`,
    "door-to-door": `${services}/door-to-door.svg`,
    "multi-stop": `${services}/multi-stop.svg`,
    scheduled: `${services}/scheduled.svg`,
    "business-transport": `${services}/business-transport.svg`,
  },

  features: {
    "easy-booking": `${features}/easy-booking.svg`,
    "multiple-stops": `${features}/multiple-stops.svg`,
    "rider-assignment": `${features}/rider-assignment.svg`,
    tracking: `${features}/delivery-tracking.svg`,
    notifications: `${features}/notifications.svg`,
    "secure-payments": `${features}/secure-payments.svg`,
    cod: `${features}/cod.svg`,
    status: `${features}/delivery-status.svg`,
  },

  howItWorks: [
    `${steps}/pickup-drop.svg`,
    `${steps}/vehicle-selection.svg`,
    `${steps}/order-confirmation.svg`,
    `${steps}/delivery-tracking.svg`,
  ],
}
