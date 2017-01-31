from datetime import time

class Clock:
    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute

    def __eq__ (self, other):
        return repr(self) == repr(other)

    def __repr__(self):
        self.cleanInput()
        input = time(self.hour, self.minute)
        output = input.strftime("%H:%M")
        return output

    def add(self, minutes):
        self.minute += minutes
        return self

    def cleanInput(self):
        self.hour += self.minute / 60
        self.minute %= 60
        self.hour %= 24
        return self
