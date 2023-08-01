# 변수
name = '가영'
print(name)
name1, name2 = "파이썬", "어려워"
print(name1, name2)
name1 = name2 = "자바도 어려워"
print(name1, name2)

print("이름은 가영이고, 성별은 여자이고, 나이는 11세이다.")
name3 = "가영"
gender = "여자"
age = 11

# print("이름은 " + name3+"이고,"+ " 성별은 "+ gender+"이고, "+"나이는 "+age+"세 이다.") 
## 타입오류 발생
print("이름은 " + name3+"이고,"+ " 성별은 "+ gender+"이고, "+"나이는 "+ str(age)+"세이다.")