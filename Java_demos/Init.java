public class Init {
  String test = "";

  public static void main(String[] args) {
    System.out.println(new Init().test);
  }

  public Init() {
    test = "默认值";
  }

}
