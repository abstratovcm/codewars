# TODO: complete this class

class PaginationHelper:
    # The constructor takes in an array of items and a integer indicating
    # how many items fit within a single page
    def __init__(self, collection, items_per_page):
        self.c = collection
        self.ipp = items_per_page
        
    # returns the number of items within the entire collection
    def item_count(self): return len(self.c)
    
    # returns the number of pages
    def page_count(self): return -(-len(self.c)//self.ipp)
    
    # returns the number of items on the current page. page_index is zero based
    # this method should return -1 for page_index values that are out of range
    def page_item_count(self,page_index):
        if page_index >= self.page_count():
            return -1
        elif page_index == self.page_count()-1:
            return len(self.c) % self.ipp
        return self.ipp
  
    # determines what page an item is on. Zero based indexes.
    # this method should return -1 for item_index values that are out of range
    def page_index(self,item_index):
        if item_index not in range(len(self.c)):
            return -1
        else:
            return -(-(item_index+1)//self.ipp)-1
