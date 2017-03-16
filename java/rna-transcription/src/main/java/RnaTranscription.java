import java.util.*;

public class RnaTranscription {
    public String ofDna(String dnaString) {
      String result = "";
      if (!(dnaString.equals(""))) {
        String [] dnas = dnaString.split("");
        for ( String dna : dnas ) {
          HashMap<String, String> complements = new HashMap<>();
          complements.put("G", "C");
          complements.put("C", "G");
          complements.put("T", "A");
          complements.put("A", "U");
          result += complements.get(dna);
        }
      }
      return result;
    }
}
