#include <stdio.h>
#define LEN_INPUT 11

int main(void) {
    char s1[LEN_INPUT];
    int a;
    
    // 문자열과 정수를 입력받기
    scanf("%s %d", s1, &a);
    
    // 문자열을 a번 반복하여 출력하기
    for (int i = 0; i < a; i++) {
        printf("%s", s1);
    }
    printf("\n");  // 줄바꿈 문자 추가

    return 0;
}
