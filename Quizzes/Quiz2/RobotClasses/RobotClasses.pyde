import random
from datetime import datetime

possibleNames = ["Wall-E", "HK-47", "Jarvis", "Optimus Prime", "C-3PO", "Boilerplate", "Mr Roboto", "Mechagodzilla", "Bishop", "Lore", "T-800", "Marvin", "Omnidroid"] # List of nerd references

possibleHeadShapes = ["Triangle", "Rectangle", "Ellipse"]
usedHeadShapes = {
    "Triangle": 0,
    "Rectangle": 0,
    "Ellipse": 0
}

possibleTextures = ["Red", "Yellow", "Green", "Blue"] # "Stripes" is not included as oldBot is always the only one with stripes
coloursForTextures = {
    "Red": color(255, 0, 0),
    "Yellow": color(255, 255, 0),
    "Green": color(0, 255, 0),
    "Blue": color(0, 0, 255)
}

minBots = 5
maxBots = 18

class Robot: # Base robot class (for oldBot)
    def __init__(self, name, headShape, tex): # Parameters: name, head shape, texture/colour
        self.name = name
        self.headShape = headShape
        self.tex = tex
        
        self.children = []
        self.childTex = tex
        while self.childTex == tex:
            self.childTex = random.choice(possibleTextures)
        self.childHead = headShape;
        
        self.maritalStatus = "Single"
        self.spouse = None

    def GetRecentChild(self):
        return self.children[len(self.children) - 1]

    def CreateChild(self):
        self.children.append(ChildBot(random.choice(possibleNames), self.childHead, self.childTex))
        while self.childHead == self.headShape:
            self.childHead = random.choice(possibleHeadShapes)     
        self.GetRecentChild().setupChild()
        self.GetRecentChild().setParent(self)
        print self.name + " created child " + self.GetRecentChild().name + " with shape " + self.GetRecentChild().headShape + " and texture " + self.GetRecentChild().tex + " at time", datetime.now().time()
        possibleNames.remove(self.GetRecentChild().name)
        
    def Marry(self, ChildBot):
        self.maritalStatus = "Married"
        self.spouse = ChildBot
        self.spouse.maritalStatus = "Married"
        self.spouse.spouse = self
    
class ChildBot(Robot): 
    def setupChild(self):
        self.parents = []
    
    def setParent(self, parent):
        self.parents.append(parent)

oldBot = Robot("oldBot", "Triangle", "Stripes")

# oldBot will generate 3 children

oldBot.CreateChild()
oldBot.CreateChild()
oldBot.CreateChild()

# first child will have 2 children, the head of the first will be round
# Parameters fulfilled: Some parents are children, at least one grandchild, all grandchildren with exactly 1 parent and exactly 1 grandparent are the same colour, 1 grandchild with round head, 4 children of single parent

oldBot.children[0].CreateChild()
oldBot.children[0].GetRecentChild().headShape = "Ellipse"
oldBot.children[0].CreateChild()

# second and third child will marry
# third child head shape will change, to be different from second child

oldBot.children[1].Marry(oldBot.children[2])
while oldBot.children[2].headShape == oldBot.children[1].headShape:
    oldBot.children[2].headShape = random.choice(possibleHeadShapes)

# second and third child will have 2 children
# Parameters fulfilled: 2 sets of siblings, 1 child with same head shape as exactly 1 parent, between 5 - 18 robots

oldBot.children[1].CreateChild()
oldBot.children[1].CreateChild()

for child in oldBot.children[1].children:
    child.setParent(oldBot.children[2])
    
# search and index all head shapes

usedHeadShapes[oldBot.headShape] = usedHeadShapes[oldBot.headShape] + 1

for child in oldBot.children:
    usedHeadShapes[child.headShape] = usedHeadShapes[child.headShape] + 1
    for grandchild in child.children:
        usedHeadShapes[grandchild.headShape] = usedHeadShapes[grandchild.headShape] + 1

print "--------"
print "Triangles:", usedHeadShapes["Triangle"]
print "Rectangles:", usedHeadShapes["Rectangle"]
print "Ellipses:", usedHeadShapes["Ellipse"]
    
print "Note that there is always one head shape with >= 3, one head shape with >= 2, and one with <= 2"
    
# Generation complete!
# Rendering:
    
def RenderOldBot(ChildBot, pos):
    if ChildBot.headShape == "Triangle":
        triangle(pos.x, pos.y, pos.x, pos.y + 100, pos.x + 100, pos.y + 100)
    elif ChildBot.headShape == "Rectangle":
        rect(pos.x, pos.y, 100, 100)
    elif ChildBot.headShape == "Ellipse":
        ellipse(pos.x + 50, pos.y + 50, 100, 100)
        
    fill(255, 255, 255)
    
    text("Name: " + ChildBot.name, pos.x, pos.y + 124)
    text("Head Shape: " + ChildBot.headShape, pos.x, pos.y + 148)
    text("Texture: " + ChildBot.tex, pos.x, pos.y + 172)
    
def RenderBot(ChildBot, pos):
    fill(coloursForTextures[ChildBot.tex])
    
    if ChildBot.headShape == "Triangle":
        triangle(pos.x, pos.y, pos.x, pos.y + 100, pos.x + 100, pos.y + 100)
    elif ChildBot.headShape == "Rectangle":
        rect(pos.x, pos.y, 100, 100)
    elif ChildBot.headShape == "Ellipse":
        ellipse(pos.x + 50, pos.y + 50, 100, 100)
        
    fill(255, 255, 255)
    
    text("Name: " + ChildBot.name, pos.x, pos.y + 124)
    text("Head Shape: " + ChildBot.headShape, pos.x, pos.y + 148)
    text("Texture: " + ChildBot.tex, pos.x, pos.y + 172)
    text("Parent: " + ChildBot.parents[0].name, pos.x, pos.y + 196)
    if len(ChildBot.parents) > 1:
        text("Parent: " + ChildBot.parents[1].name, pos.x, pos.y + 220)
    text("Marital Status: " + ChildBot.maritalStatus, pos.x, pos.y + 244)
    if ChildBot.spouse != None:
        text("Spouse: " + ChildBot.spouse.name, pos.x, pos.y + 268)
    
def setup():
    size(1024, 1024)
    background(0, 0, 0, 0)
    
def draw():
    fill(255, 255, 255)
    textSize(16)
    text("Grandparents | Try rendering multiple times! Grandchildren can have different colours!", 24, 24)
    text("Parents/Children", 24, 365)
    text("Grandchildren", 24, 706)
    
    RenderOldBot(oldBot, PVector(48, 48))
    
    i = 0
    k = 0
    while i < len(oldBot.children):
        RenderBot(oldBot.children[i], PVector(48 + (200 * i), 389))
        
        j = 0
        while j < len(oldBot.children[i].children):
            RenderBot(oldBot.children[i].children[j], PVector(48 + 200 * k, 730))
            k += 1
            j += 1
        
        i += 1
