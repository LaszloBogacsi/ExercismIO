public class HelloWorld {
    public static String hello(String name) {

      if (name == null || name.equals("")){
        return "Hello, World!";
      }
      String greeting = "Hello, " + name + "!";
        return greeting;
    }
}
