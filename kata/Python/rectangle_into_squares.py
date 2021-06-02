def sqInRect(length, width):
    numbers = []
    if length == width:
        return None
    while(True):
        if length > width: 
            numbers.append(width)
            length -= width
        elif width > length: 
            numbers.append(length)
            width -= length
        else:
            numbers.append(length)
            break
    return numbers
