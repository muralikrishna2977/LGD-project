export function createPageUrl(page: string): string {
  switch (page) {
    case "Home":
      return "/home";
    case "About":
      return "/about";
    case "Ventures":
      return "/ventures";
    case "ForLandowners":
      return "/for-landowners";
    case "Gallery":
      return "/gallery";
    case "Testimonials":
      return "/testimonials";
    case "Contact":
      return "/contact";
    default:
      return "/";
  }
}
