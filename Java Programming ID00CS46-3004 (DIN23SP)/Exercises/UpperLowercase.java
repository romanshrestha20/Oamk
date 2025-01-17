
import java.util.List;

public class UpperLowercase {

    public static void main(String[] args) {
        List<String> words = List.of("hello", "world", "java", "programming", "language");

        List<String> result = words.stream()
        .map(String::toUpperCase)
        .toList();

        System.out.println(result);
    }
}
