from datetime import time

class Clock:
    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute

    def __eq__ (self, other):
        return repr(self) == repr(other)
    def __repr__(self):
        if self.minute < 0 or self.minute > 59:
            hoursFromMinutes = self.minute / 60
            self.hour = self.hour + hoursFromMinutes
            validMinutes = self.minute % 60
            self.minute = validMinutes
        if self.hour < 0 or self.hour > 23:
            # times = hour / 24
            validHours = self.hour % 24
            self.hour = validHours

        input = time(self.hour, self.minute)
        output = input.strftime("%H:%M")

        return output

    def add(self, minutes):
        self.minute = self.minute + minutes
        return self
