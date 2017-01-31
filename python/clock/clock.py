from datetime import time

class Clock:
    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute
        self.cleanInput()

    def __eq__ (self, other):
        return repr(self) == repr(other)

    def __repr__(self):
        input = time(self.hour, self.minute)
        output = input.strftime("%H:%M")
        return output

    def add(self, minutes):
        self.minute += minutes
        return self.cleanInput()

    def cleanInput(self):
        self.hour += self.minute / 60
        self.minute %= 60
        self.hour %= 24
        return self
