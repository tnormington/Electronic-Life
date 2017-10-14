import Vector from './components/Vector';

export const directions = {
    "n":  new Vector( 0, -1),
    "ne": new Vector( 1, -1),
    "e":  new Vector( 1,  0),
    "se": new Vector( 1,  1),
    "s":  new Vector( 0,  1),
    "sw": new Vector(-1,  1),
    "w":  new Vector(-1,  0),
    "nw": new Vector(-1, -1)
  };

export const directionNames = "n ne e se s sw w nw".split(" ");

export const plan = ["############################",
                    "#      #    #      o      ##",
                    "#                          #",
                    "#     ~    #####           #",
                    "##         #   #    ##     #",
                    "###           ## o   #     #",
                    "#           ###      #     #",
                    "#   ####                   #",
                    "#   ##       o        ~    #",
                    "# o  #         o       ### #",
                    "#    #                     #",
                    "############################"];