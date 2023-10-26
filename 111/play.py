from tkinter import *
from selenium import webdriver
from selenium.webdriver.common.by import By
import tkinter.messagebox
import time

def playMacro():
    if userID.get() == "":
        tkinter.messagebox.showinfo("어허", "아이디 써라")
    elif userPWD.get() == "":
        tkinter.messagebox.showinfo("어허", "비밀번호 써라")
    elif selectDay.get() == "":
        tkinter.messagebox.showinfo("어허", "날짜 써라")
    else:
        options = webdriver.ChromeOptions()

        options.add_argument('headless')
        options.add_argument("no-sandbox")
        options.add_argument('window-size=1920x1080')
        options.add_argument("disable-gpu")   
        options.add_argument("lang=ko_KR")    
        options.add_argument('user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')

        driver = webdriver.Chrome()
        url = 'https://camp.xticket.kr/web/main?shopEncode=a1535c44b7b5b3ab38fd902f0c58f8600f1a57e45999ac4b1a7b8c321f1d2df5'
        driver.get(url)
        driver.implicitly_wait(3)

        btn1 = driver.find_element(By.XPATH, '//*[@id="notice_layer_968"]/div/div/div/fieldset/ul/li/button')
        btn2 = driver.find_element(By.XPATH, '//*[@id="notice_layer_336"]/div/div/div/fieldset/ul/li/button')
        btn3 = driver.find_element(By.XPATH, '//*[@id="notice_layer_950"]/div/div/div/fieldset/ul/li/button')

        if btn1:
            btn1.click()
        if btn2:
            btn2.click()
        if btn3:
            btn3.click()
        # madcow95
        # CSdtcow760@
        driver.find_element('id', 'login_id').send_keys(userID.get())
        driver.find_element('id', 'login_passwd').send_keys(userPWD.get())
        driver.find_element(By.XPATH, '//*[@id="header"]/div[2]/fieldset/form/ul[1]/li[3]/a').click()
        driver.find_element(By.CLASS_NAME, 'next').click()

        time.sleep(0.5)
        driver.find_elements(By.CLASS_NAME, 'available')[int(selectDay.get()) - 1].click()
        driver.find_element('id', '01010035').click()
        driver.find_element(By.CLASS_NAME, "btn_reservation01").click()

        # imgDiv = driver.find_element(By.CLASS_NAME, "ex_area")
        # img = imgDiv.find_element(By.TAG_NAME, "img")

        # 예약하기 버튼 클릭 후 jcaptcha를 해결 못함...
        time.sleep(1000)
            
tk = Tk() 
user_id, password = StringVar(), StringVar()
label1 = Label(tk,text='ID').grid(row=0, column=0)
label2 = Label(tk,text='PW').grid(row=1,column=0)
label3 = Label(tk,text='일').grid(row=2,column=0)
userID = Entry(tk, textvariable=user_id)
userPWD = Entry(tk, textvariable=password, show="-")
selectDay = Entry(tk)

userID.grid(row=0,column=1)
userPWD.grid(row=1,column=1)
selectDay.grid(row=2,column=1)

btn1 = Button(tk,text='실행',bg='black',fg='white',command=playMacro).grid(row=3,column=1)

tk.mainloop()