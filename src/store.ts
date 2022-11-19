import { DateRange } from "@blueprintjs/datetime";
import { observable } from "@legendapp/state";

export const store = {
  db: observable({
    open: false,
    startDate: "",
    endDate: "",
    search: ""
  }),
  actions: {
    openDialog() {
      store.db.open.set(true);
    },
    closeDialog() {
      store.db.open.set(false);
    },
    changeRange(range: DateRange) {},
    changeSearch(s: string) {
      store.db.search.set(s);
    }
  },
  ui: {
    isOpen() {
      // return store.db.open.get();
      return true;
    },
    getSearch() {
      return store.db.search.get();
    },
    getDateRange() {
      return [];
    }
  }
};

// @ts-ignore
window._store = store;
