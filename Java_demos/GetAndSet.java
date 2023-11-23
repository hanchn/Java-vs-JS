import java.util.regex.*;

public class GetAndSet {
  public String regex = "^[1][3,4,5,7,8][0-9]{9}$";
  private String phone;
  public Boolean isValid = false;

  public static void main(String[] args) {
    GetAndSet gas = new GetAndSet();
    gas.setPhone("15896055561");
    gas.getPhone();
    System.out.println(gas.getPhone());
  }

  public String getPhone() {
    String result = phone.replaceAll("(\\d{3})\\d*(\\d{5})", "$1****$2");
    return result;
  }

  public void setPhone(String phone_) {
    Pattern pattern = Pattern.compile(regex);
    Matcher matcher = pattern.matcher(phone_);
    isValid = matcher.matches();
    phone = isValid ? phone_ : "你传入了非法手机号！";
  }
}