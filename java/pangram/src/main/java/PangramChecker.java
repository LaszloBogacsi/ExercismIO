public class PangramChecker {

  public boolean isPangram(String input) {
    boolean result = true;
    input = input.toLowerCase();
    String[] alphabet = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};

    if (input.equals("")) {
      result = false;
      return result;
    } else {
      for (String letter : alphabet) {
        if (!(input.contains(letter))) {
          result = false;
          return result;
        }
      }
    }
    return result;
  }
}
