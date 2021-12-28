const clear2 =
        "    \\   /    \n" +
        "     .-.     \n" +
        "  ― (   ) ―  \n" + 
        "     `-’     \n" +
        "    /   \\    \n" +
        "             \n"


const partlyCloudy = 
        "   \\  /      \n" +
        " _ /\"\".-.    \n" + 
        "   \\_(   ).  \n" +
        "   /\(___(__) \n" + 
        "             \n"

const cloudy =
        "             \n" +
        "     .--.    \n" +
        "  .-(    ).  \n" +
        " (___.__)__) \n" +
        "             \n"

const veryCloudy =
        "             \n" +
        "     .--.    \n" +
        "  .-(    ).  \n" +
        " (___.__)__) \n" +
        "             \n"

const clear =
        " _`/\"\".-.    \n" +
        "  ,\\_(   ).  \n" +
        "   /(___(__) \n" +
        "     ‘ ‘ ‘ ‘ \n" +
        "    ‘ ‘ ‘ ‘  \n"
//    "LightShowers": [
//        "\033[38;5;226m _`/\"\"\033[38;5;250m.-.    \033[0m",
//        "\033[38;5;226m  ,\\_\033[38;5;250m(   ).  \033[0m",
//        "\033[38;5;226m   /\033[38;5;250m(___(__) \033[0m",
//        "\033[38;5;111m     ‘ ‘ ‘ ‘ \033[0m",
//        "\033[38;5;111m    ‘ ‘ ‘ ‘  \033[0m"],
 //   "HeavyShowers": [
//        "\033[38;5;226m _`/\"\"\033[38;5;240;1m.-.    \033[0m",
//        "\033[38;5;226m  ,\\_\033[38;5;240;1m(   ).  \033[0m",
//        "\033[38;5;226m   /\033[38;5;240;1m(___(__) \033[0m",
//        "\033[38;5;21;1m   ‚‘‚‘‚‘‚‘  \033[0m",
//        "\033[38;5;21;1m   ‚’‚’‚’‚’  \033[0m"],
//    "LightSnowShowers": [
//        "\033[38;5;226m _`/\"\"\033[38;5;250m.-.    \033[0m",
//        "\033[38;5;226m  ,\\_\033[38;5;250m(   ).  \033[0m",
//        "\033[38;5;226m   /\033[38;5;250m(___(__) \033[0m",
//        "\033[38;5;255m     *  *  * \033[0m",
//        "\033[38;5;255m    *  *  *  \033[0m"],
//    "HeavySnowShowers": [
//        "\033[38;5;226m _`/\"\"\033[38;5;240;1m.-.    \033[0m",
//        "\033[38;5;226m  ,\\_\033[38;5;240;1m(   ).  \033[0m",
//        "\033[38;5;226m   /\033[38;5;240;1m(___(__) \033[0m",
//        "\033[38;5;255;1m    * * * *  \033[0m",
//        "\033[38;5;255;1m   * * * *   \033[0m"],
//    "LightSleetShowers": [
//        "\033[38;5;226m _`/\"\"\033[38;5;250m.-.    \033[0m",
//        "\033[38;5;226m  ,\\_\033[38;5;250m(   ).  \033[0m",
//        "\033[38;5;226m   /\033[38;5;250m(___(__) \033[0m",
//        "\033[38;5;111m     ‘ \033[38;5;255m*\033[38;5;111m ‘ \033[38;5;255m* \033[0m",
//        "\033[38;5;255m    *\033[38;5;111m ‘ \033[38;5;255m*\033[38;5;111m ‘  \033[0m"],
 //   "ThunderyShowers": [
 //       "\033[38;5;226m _`/\"\"\033[38;5;250m.-.    \033[0m",
 //       "\033[38;5;226m  ,\\_\033[38;5;250m(   ).  \033[0m",
 //       "\033[38;5;226m   /\033[38;5;250m(___(__) \033[0m",
 //       "\033[38;5;228;5m    ⚡\033[38;5;111;25m‘ ‘\033[38;5;228;5m⚡\033[38;5;111;25m‘ ‘ \033[0m",
 //       "\033[38;5;111m    ‘ ‘ ‘ ‘  \033[0m"],
 //   "ThunderyHeavyRain": [
 //       "\033[38;5;240;1m     .-.     \033[0m",
 //       "\033[38;5;240;1m    (   ).   \033[0m",
 //       "\033[38;5;240;1m   (___(__)  \033[0m",
 //       "\033[38;5;21;1m  ‚‘\033[38;5;228;5m⚡\033[38;5;21;25m‘‚\033[38;5;228;5m⚡\033[38;5;21;25m‚‘ \033[0m",
 //       "\033[38;5;21;1m  ‚’‚’\033[38;5;228;5m⚡\033[38;5;21;25m’‚’  \033[0m"],
 //   "ThunderySnowShowers": [
 //       "\033[38;5;226m _`/\"\"\033[38;5;250m.-.    \033[0m",
 //       "\033[38;5;226m  ,\\_\033[38;5;250m(   ).  \033[0m",
 //       "\033[38;5;226m   /\033[38;5;250m(___(__) \033[0m",
 //       "\033[38;5;255m     *\033[38;5;228;5m⚡\033[38;5;255;25m*\033[38;5;228;5m⚡\033[38;5;255;25m* \033[0m",
 //       "\033[38;5;255m    *  *  *  \033[0m"],
//    "LightRain": [
//        "\033[38;5;250m     .-.     \033[0m",
//        "\033[38;5;250m    (   ).   \033[0m",
//        "\033[38;5;250m   (___(__)  \033[0m",
//        "\033[38;5;111m    ‘ ‘ ‘ ‘  \033[0m",
//        "\033[38;5;111m   ‘ ‘ ‘ ‘   \033[0m"],
//    "HeavyRain": [
//        "\033[38;5;240;1m     .-.     \033[0m",
//        "\033[38;5;240;1m    (   ).   \033[0m",
//        "\033[38;5;240;1m   (___(__)  \033[0m",
//        "\033[38;5;21;1m  ‚‘‚‘‚‘‚‘   \033[0m",
//        "\033[38;5;21;1m  ‚’‚’‚’‚’   \033[0m"],
//    "LightSnow": [
//        "\033[38;5;250m     .-.     \033[0m",
//        "\033[38;5;250m    (   ).   \033[0m",
//        "\033[38;5;250m   (___(__)  \033[0m",
//        "\033[38;5;255m    *  *  *  \033[0m",
//        "\033[38;5;255m   *  *  *   \033[0m"],
//    "HeavySnow": [
//        "\033[38;5;240;1m     .-.     \033[0m",
//        "\033[38;5;240;1m    (   ).   \033[0m",
//        "\033[38;5;240;1m   (___(__)  \033[0m",
//        "\033[38;5;255;1m   * * * *   \033[0m",
//        "\033[38;5;255;1m  * * * *    \033[0m"],
//    "LightSleet": [
//        "\033[38;5;250m     .-.     \033[0m",
//        "\033[38;5;250m    (   ).   \033[0m",
//        "\033[38;5;250m   (___(__)  \033[0m",
//        "\033[38;5;111m    ‘ \033[38;5;255m*\033[38;5;111m ‘ \033[38;5;255m*  \033[0m",
//        "\033[38;5;255m   *\033[38;5;111m ‘ \033[38;5;255m*\033[38;5;111m ‘   \033[0m"],
 //   "Fog": [
  //      "             ",
//        "\033[38;5;251m _ - _ - _ - \033[0m",
//        "\033[38;5;251m  _ - _ - _  \033[0m",
//        "\033[38;5;251m _ - _ - _ - \033[0m",
//        "             "],
//}
//    "Unknown": [
//        "    .-.      ",
//        "     __)     ",
//        "    (        ",
//        "     `-’     ",
//        "      •      "],
//clear sky
//Rain
//Snow
//thunderstorm
//drizzle
//Atmosphere
//clear
module.exports ={
    cloudy,
    clear
}
