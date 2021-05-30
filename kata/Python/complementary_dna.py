def DNA_strand(dnaL):
        dnaR = ''
        switcher = {
            'A': 'T',
            'T': 'A',
            'C': 'G',
            'G': 'C',
        }
        for c in dnaL: dnaR += switcher.get(c)
        return dnaR
