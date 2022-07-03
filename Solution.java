
import java.util.Arrays;

public class Solution {

    private static final int MODULO_TO_APPLY_FOR_RESULT = (int) Math.pow(10, 9) + 7;

    public int maxArea(int height, int width, int[] horizontalCuts, int[] verticalCuts) {

        Arrays.sort(horizontalCuts);
        int maxSliceHorizontal = Math.max(horizontalCuts[0], (height - horizontalCuts[horizontalCuts.length - 1]));
        for (int i = 1; i < horizontalCuts.length; ++i) {
            maxSliceHorizontal = Math.max(maxSliceHorizontal, (horizontalCuts[i] - horizontalCuts[i - 1]));
        }

        Arrays.sort(verticalCuts);
        int maxSliceVertical = Math.max(verticalCuts[0], (width - verticalCuts[verticalCuts.length - 1]));
        for (int i = 1; i < verticalCuts.length; ++i) {
            maxSliceVertical = Math.max(maxSliceVertical, (verticalCuts[i] - verticalCuts[i - 1]));
        }

        return (int) (((long) maxSliceHorizontal * maxSliceVertical) % MODULO_TO_APPLY_FOR_RESULT);
    }
}
