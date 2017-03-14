import java.util.*;

public class RnaTranscription {
    public String ofDna(String dnaString) {
      String result = "";
      if (!(dnaString.equals(""))) {
        HashMap<String, String> complements = new HashMap<>();
        complements.put("G", "C");
        complements.put("C", "G");
        complements.put("T", "T");
        complements.put("A", "U");
        result = complements.get(dnaString);
      }


      return result;
    }
}
