def increment_string(string):
    
    filename = string.rstrip('0123456789')
    numbers = string[len(filename):]
    if numbers == "": return string + '1'
    return filename + str(int(numbers) + 1).zfill(len(numbers))
