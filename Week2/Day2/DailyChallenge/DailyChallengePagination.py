class Pagination:

    def __separate_items(self):
        content = []
        charachers_list = self.items
        while charachers_list != []:
            current_page = []
            if len(charachers_list) >= self.page_size:
                for i in range(self.page_size):
                    current_page.append(charachers_list[0])
                    del charachers_list[0]
            else:
                for i in range(len(charachers_list)):
                    current_page.append(charachers_list[0])
                    del charachers_list[0]
            content.append(current_page)   
        return content


    def __init__(self, items, page_size) -> None:
        self.items = items
        self.page_size = page_size
        self.current_page = 1
        self.content = self.__separate_items()

    def getVisibleItems(self):
        print(self.content[self.current_page - 1])

    def prevPage(self):
        if self.current_page != 1:
            self.current_page -= 1
        else:
            raise Exception("You are already on the 1st page")

    def nextPage(self):
        if self.current_page != len(self.content):
            self.current_page += 1
        else:
            raise Exception("You are already on the last page")
        
    def firstPage(self):
        self.current_page = 1

    def lastPage(self):
        self.current_page = len(self.content)

    def go_to_page(self, pageNum):
        if pageNum < 1:
            pageNum = 1
        if pageNum > len(self.content):
            pageNum = len(self.content)
        self.current_page = pageNum


    


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)
p.getVisibleItems()

# go to page 2
try:
    p.nextPage()
except Exception as a:
    print(a)
p.getVisibleItems()

# go back to page 1
try:
    p.prevPage()
except Exception as a:
    print(a)   
p.getVisibleItems()

# try to to go page 0 - get a mistake
try:
    p.prevPage()
except Exception as a:
    print(a)  

# go to last page
p.lastPage()
p.getVisibleItems()    

# go to first page
p.firstPage()
p.getVisibleItems()   

# go to page 3
p.go_to_page(3)
p.getVisibleItems()

# go to page -5 - should get page 0
p.go_to_page(-5)
p.getVisibleItems()

# go to page 100 - should get last page
p.go_to_page(100)
p.getVisibleItems()