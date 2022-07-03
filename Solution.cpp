
#include <vector>
using namespace std;

class Solution {
    
    inline static const int MODULO_TO_APPLY_FOR_RESULT = pow(10, 9) + 7;

public:
    int maxArea(int height, int width, vector<int>& horizontalCuts, vector<int>& verticalCuts) {

        sort(horizontalCuts.begin(), horizontalCuts.end());
        int maxSliceHorizontal = max(horizontalCuts[0], (height - horizontalCuts[horizontalCuts.size() - 1]));
        for (int i = 1; i < horizontalCuts.size(); ++i) {
            maxSliceHorizontal = max(maxSliceHorizontal, (horizontalCuts[i] - horizontalCuts[i - 1]));
        }

        sort(verticalCuts.begin(), verticalCuts.end(), comparatorSmallerNumbersFirst);
        int maxSliceVertical = max(verticalCuts[0], (width - verticalCuts[verticalCuts.size() - 1]));
        for (int i = 1; i < verticalCuts.size(); ++i) {
            maxSliceVertical = max(maxSliceVertical, (verticalCuts[i] - verticalCuts[i - 1]));
        }

        return (static_cast<long long> (maxSliceHorizontal) * maxSliceVertical) % MODULO_TO_APPLY_FOR_RESULT;
    }
};
