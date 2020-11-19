<!-- vscode-markdown-toc -->
* 1. [Level generation](#Levelgeneration)
* 2. [Assembly](#Assembly)
* 3. [Debug Mode](#DebugMode)
	* 3.1. [Register view](#Registerview)
	* 3.2. [Save state](#Savestate)
* 4. [Scripting](#Scripting)
* 5. [User Customisation Levels](#UserCustomisationLevels)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


# ACI

<img src="https://24.media.tumblr.com/tumblr_kz7gthD7UU1qbn1vmo1_500.png"/>

Imagine a game where the goal is to complete the game just like mario or whatever 

but the way in which you complete it is based arbitrarily by the player i.e. they can:

1. Complete the game normally via the rules defined
2. Complete the game by exploiting vulnerabilities in the game world

##  1. <a name='Levelgeneration'></a>Level generation

The game supplies an `assembly` like instruction set that is used to build the level but also where things can be potentially exploited

##  2. <a name='Assembly'></a>Assembly

Custom assembly could use bits or maybe decimal...? (Custom assembly + subset instructions with vulnerability

##  3. <a name='DebugMode'></a>Debug Mode
###  3.1. <a name='Registerview'></a>Register view


Players can toggle debug mode to see the registers in order to find the flaws and figure out how to do ACI

###  3.2. <a name='Savestate'></a>Save state

Players in debug mode can toggle save and load state 

##  4. <a name='Scripting'></a>Scripting

Players can do simply scripting to control the player to do more difficult level input execution

##  5. <a name='UserCustomisationLevels'></a>User Customisation Levels

PLayers can build their own levels with the assembly like language in order to create a rich a environment for other players to try their levels just like in Mario Maker 

