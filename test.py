from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

options = webdriver.ChromeOptions()

# headless 옵션 설정
options.add_argument('headless')
options.add_argument("no-sandbox")

# 브라우저 윈도우 사이즈
options.add_argument('window-size=1920x1080')

# 사람처럼 보이게 하는 옵션들
options.add_argument("disable-gpu")   # 가속 사용 x
options.add_argument("lang=ko_KR")    # 가짜 플러그인 탑재
options.add_argument('user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')

driver = webdriver.Chrome()
url = 'https://www.letskorail.com/ebizprd/EbizPrdTicketpr21100W_pr21110.do'
driver.get(url)
driver.implicitly_wait(3)

# driver.find_element("id", "selGoTrainRa00").click()
driver.find_element('id', 'start').clear()
driver.find_element('id', 'start').send_keys('용산')
driver.find_element('id', 'get').clear()
driver.find_element('id', 'get').send_keys('광주송정')
driver.find_element('id', 's_day').send_keys('31')
driver.find_element('id', 's_hour').send_keys('12`')
driver.find_element(By.CLASS_NAME, "btn_inq").click()

time.sleep(1)
driver.find_element(By.CLASS_NAME, "ui-button-text").click()

time.sleep(1)
table = driver.find_element('id', 'tableResult')
tbody = table.find_element(By.TAG_NAME, "tbody")
rows = tbody.find_elements(By.TAG_NAME, "tr")
for row in rows :
    td = row.find_elements(By.TAG_NAME, "td")
    reserveBtn = td[5].find_element(By.TAG_NAME, "a")
    if reserveBtn:
        reserveBtn.click()
        break

time.sleep(1)
loginList = driver.find_element(By.CLASS_NAME, "box_rig")
loginBtnParent = loginList.find_element(By.TAG_NAME, "ul")
loginBtnList = loginBtnParent.find_element(By.TAG_NAME, "li")
loginBtn = loginBtnList.find_element(By.TAG_NAME, "a")
loginBtn.click()

time.sleep(1)
driver.switch_to.frame('embeded-modal-nomem')
modal = driver.find_element(By.CLASS_NAME, "btn_blue_ang")
modal.click()

driver.find_element('id', 'name').send_keys('최광우')
driver.find_element(By.NAME, 'txtCpNo2').send_keys('5149')
driver.find_element(By.NAME, 'txtCpNo3').send_keys('6011')
driver.find_element('id', 'pw').send_keys('19760')
driver.find_element('id', 'pw_s').send_keys('19760')
driver.find_element('id', 'radio1').click()
driver.find_element(By.NAME, 'chkAgree').click()
driver.find_element(By.CLASS_NAME, "btn_blue_ang").click()

driver.find_element(By.NAME, 'chkAgree2').click()
driver.find_element('id', 'okBtn').click()

time.sleep(500)
