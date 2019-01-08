App.battle = App.cable.subscriptions.create "BattleChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    console.log data
    paintHtml(data)

  attack: (position) ->
    @perform 'attack', position: position
