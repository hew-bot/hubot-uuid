# Description:
#   Make hubot generate uuid
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot uuid me - generate uuid
#
# Author:
#   mrinjamul <mrinjamul@gmail.com>

child_process = require 'child_process'

module.exports = (robot) ->
  robot.respond /uuid( me)?/i, (msg) ->
    try
       child_process.exec 'uuid', (error, stdout, stderr) ->
            if error
                msg.send "can't compute: " + stderr
            else
                output = stdout+''
                msg.send output

    catch error
        msg.send error+''
