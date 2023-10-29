from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
import urllib.request
from PIL import Image
from io import BytesIO
import os
import pytesseract
import time


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

driver.find_element('id', 'login_id').send_keys("madcow95")
driver.find_element('id', 'login_passwd').send_keys("CSdtcow760@")
loginListParent = driver.find_element(By.CLASS_NAME, "login_txt")
loginList = loginListParent.find_elements(By.TAG_NAME, "li")
loginBtn = loginList[2].find_element(By.TAG_NAME, "a")
driver.find_element(By.XPATH, '//*[@id="header"]/div[2]/fieldset/form/ul[1]/li[3]/a').click()

driver.find_element(By.CLASS_NAME, 'next').click()

wantDay = 29
time.sleep(0.5)
driver.find_elements(By.CLASS_NAME, 'available')[wantDay - 1].click()
driver.find_element('id', '01010035').click()
driver.find_element(By.CLASS_NAME, "btn_reservation01").click()

imgDiv = driver.find_element(By.CLASS_NAME, "ex_area")
img = imgDiv.find_element(By.TAG_NAME, "img")
time.sleep(0.5)

# action = ActionChains(driver)
# action.move_to_element(img).perform()
# ActionChains(driver).move_to_element(imgDiv).perform()
# img_url = img.get_attribute("src")

# urllib.request.urlretrieve(img_url, 'test.jpg')
# print(img_url)
# res = request.urlopen(img_url).read()
# print(res)
# img = Image.open(BytesIO(res))

# print(img.size)
# reserveUrl = driver.current_url.split("main?shopEncode=")

# driver.get(reserveUrl[0] + "books?shopEncode=" + reserveUrl[1])
time.sleep(1000)
