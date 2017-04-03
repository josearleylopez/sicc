import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2017-04-08',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'Evento 1',
          start: '2017-04-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Evento 2',
          start: '2017-04-07',
          end: '2017-04-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Evento 3',
          start: '2017-04-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Evento 4',
          start: '2017-04-01T07:00:00',
          color: dashboardColors.gossip
        }
      ]
    };
  }
}
