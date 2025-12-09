#include <stdio.h>
#include <string.h>

int main() {
    int total[5][3];
    char name[5][100];
    int sum;
    int high = -1, low = 1000;
    char maxname[100], minname[100];

    for (int i = 0; i < 5; i++) {
        printf("Enter the name of student %d: ", i + 1);
        scanf("%s", name[i]);

        sum = 0; 
        for (int j = 0; j < 3; j++) {
            printf("Enter marks for subject %d: ", j + 1);
            scanf("%d", &total[i][j]);

            
            if (total[i][j] < 0 || total[i][j] > 100) {
                printf("Invalid marks! Please enter again.\n");
                j--; 
                continue;
            }

            sum += total[i][j];
        }

        float avg = sum / 3.0;
        printf("%s: Total = %d, Average = %.2f\n", name[i], sum, avg);

        
        if (sum > high) {
            high = sum;
            strcpy(maxname, name[i]);
        }

       
        if (sum < low) {
            low = sum;
            strcpy(minname, name[i]);
        }
    }

    printf("\nHighest total marks: %d by %s\n", high, maxname);
    printf("Lowest total marks: %d by %s\n", low, minname);

    return 0;
}
