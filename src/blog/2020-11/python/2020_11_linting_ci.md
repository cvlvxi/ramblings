<!-- vscode-markdown-toc -->
* 1. [Install pylint](#Installpylint)
* 2. [Run Pylint](#RunPylint)
* 3. [Handling no `objects` member](#Handlingnoobjectsmember)
	* 3.1. [Django Specialty?](#DjangoSpecialty)
	* 3.2. [Testing, it works!](#Testingitworks)
* 4. [Automating this with Gitlab CI/CD](#AutomatingthiswithGitlabCICD)
* 5. [Setup with Github](#SetupwithGithub)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Lint

Let's get pylinting working with a ci system e.g. `gitlab's ci`.

##  1. <a name='Installpylint'></a>Install pylint

```
pip install pylint
```

##  2. <a name='RunPylint'></a>Run Pylint

```
pylint -j 4 --output-format=colorized --disable=R,C,W src
```

- j 4 for Running in multithreading for speed
- `--disable=R,C,W` to disable codes for R, C, W since errors can be so verbose

##  3. <a name='Handlingnoobjectsmember'></a>Handling no `objects` member

```
xip/views.py:1276:22: E1101: Class 'DataAsset' has no 'objects' member (no-member)
xip/views.py:1418:29: E1101: Class 'DataAsset' has no 'objects' member (no-member)
```

###  3.1. <a name='DjangoSpecialty'></a>Django Specialty?

- This project uses django so there might be something special there..
- Do I need [this](https://pypi.org/project/pylint-django/)?
- According to documentation you  need to run it like such:

```
DJANGO_SETTINGS_MODULE=your.app.settings pylint --load-plugins pylint_django [..other options..] <path_to_your_sources>
```

###  3.2. <a name='Testingitworks'></a>Testing, it works!

```

(py37env) ➜  lint git:(master) ✗ DJANGO_SETTINGS_MODULE=settings.py pylint --load-plugins pylint_django -j 4 --output-format=colorized --disable=R,C xip

...
...

-------------------------------------------------------------------
Your code has been rated at 9.02/10 (previous run: 10.00/10, -0.98)
```

Ok cool!


##  4. <a name='AutomatingthiswithGitlabCICD'></a>Automating this with Gitlab CI/CD

What's required for getting commit ci/cd running for your target repo is a `.gitlab-ci.yml` file in the root of your repo

```bash
# FIXME: This would be better with docker executor
variables:
    GIT_SUBMODULE_STRATEGY: recursive
    GIT_STRATEGY: clone

test:
    stage: test
    before_script:
        - docker pull docker.io/centos/postgresql-96-centos7@sha256:ba5063d446028abf9813b8453c759cff94a0b1f2fb44e5a9a8012b29e14427a4
        - DO SOME STUFF BEFORE
    script:
        - docker build -t tagname .
        - DO YOUR TESTING HERE 
    after_script:
        - docker stop bleh 
```

-----------------------------------------------------------

##  5. <a name='SetupwithGithub'></a>Setup with Github

- Go to [Travis Website](https://docs.travis-ci.com/user/tutorial/)
- Setup with github
- Link to a specific repostitory

<img src="https://imgur.com/qkq1JL6.png"/>


- Add a .travis.yml file

Github offers a free service as well let's try the following [here](https://dev.to/edeediong/using-travisci-to-write-better-python-codes-27kg)

Then coolness

- https://travis-ci.com/github/cvlvxi/auto_pylint_on_commit/builds/201881757

- Example Project : [https://github.com/cvlvxi/auto_pylint_on_commit](https://github.com/cvlvxi/auto_pylint_on_commit)
