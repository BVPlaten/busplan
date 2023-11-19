const RouteColors = {
    "Route A": {"color": "#FFC0CB"},  // Pink
    "Route B": {"color": "#FFD700"},  // Gold
    "Route C": {"color": "#FFA07A"},  // LightSalmon
    "Route D": {"color": "#FF69B4"},  // HotPink
    "Route E": {"color": "#9370DB"},  // MediumPurple
    "Route F": {"color": "#87CEEB"},  // SkyBlue
    "Route G": {"color": "#98FB98"},  // PaleGreen
    "Route H": {"color": "#FF6347"},  // Tomato
    "Route I": {"color": "#FF4500"},  // OrangeRed
    "Route J": {"color": "#20B2AA"},  // LightSeaGreen
    "Route K": {"color": "#FF8C00"},  // DarkOrange
    "Route L": {"color": "#00FA9A"},  // MediumSpringGreen
    "Route M": {"color": "#FFDAB9"},  // PeachPuff
    "Route N": {"color": "#6A5ACD"},  // SlateBlue
    "Route O": {"color": "#FF1493"},  // DeepPink
    "Route P": {"color": "#00BFFF"},  // DeepSkyBlue
    "Route Q": {"color": "#FFE4B5"},  // Moccasin
    "Route R": {"color": "#8A2BE2"},  // BlueViolet
    "Route S": {"color": "#FFFF00"},  // Yellow
    "Route T": {"color": "#B0C4DE"},  // LightSteelBlue
    "Route U": {"color": "#FF4500"},  // OrangeRed
    "Route V": {"color": "#32CD32"},  // LimeGreen
    "Route W": {"color": "#FA8072"},  // Salmon
    "Route X": {"color": "#FF00FF"},  // Magenta
    "Route Y": {"color": "#FF6347"},  // Tomato
    "Route Z": {"color": "#00FF7F"}   // SpringGreen
  };

const getBackgroundColor = (route: string): string => {
    const RoutColor = RouteColors[route].color;
    return RoutColor;
  };

export default getBackgroundColor;